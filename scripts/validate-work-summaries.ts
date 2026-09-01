import { workSummaries, summaryAliases } from '../src/generated/workSummaries';
import { works } from '../src/data/works';
import { workSourceEvidence } from '../src/generated/workSourceEvidence';
import { workAliases } from '../src/data/workAliases';
import { getCanonicalWorks } from '../src/lib/canonicalWorks';
import { canonicalExclusions } from '../src/data/canonicalExclusions';

function validate() {
  let errors = 0;

  const rawWorksCount = works.length;
  const legacyAliasCount = Object.keys(workAliases).length;
  const canonicalWorks = getCanonicalWorks();
  const visibleCanonicalCount = canonicalWorks.length;

  let aliasAccountingErrors = 0;
  const exclusionsCount = Object.keys(canonicalExclusions || {}).length;
  if (rawWorksCount !== visibleCanonicalCount + legacyAliasCount + exclusionsCount) {
    console.error(`FAIL: Alias accounting error! Raw: ${rawWorksCount}, Visible: ${visibleCanonicalCount}, Legacy: ${legacyAliasCount}, Exclusions: ${exclusionsCount}`);
    aliasAccountingErrors++;
    errors++;
  }

  let rawCompleteCount = 0;
  let rawPartialCount = 0;
  let rawMissingCount = 0;
  let rawUnavailableCount = 0;

  let rawCompleteWithVerifiedEvidence = 0;
  let rawPartialWithVerifiedEvidence = 0;
  let completeWithoutVerifiedEvidence = 0;
  let multipartIncompleteCount = 0;
  let aliasErrorCount = 0;
  let evidenceErrorCount = 0;
  let mismatchCount = 0;

  let completeOnExcerptCount = 0;
  let completeWithFullDocumentCoverageCount = 0;

  const verifiedSlugs = new Set<string>();

  // Track summary alias cycles
  for (const [alias, target] of Object.entries(summaryAliases)) {
    if (summaryAliases[target]) {
      console.error(`FAIL: Summary Alias cycle detected: ${alias} -> ${target} -> ${summaryAliases[target]}`);
      aliasErrorCount++;
      errors++;
    }
    const targetSummary = workSummaries[target];
    if (!targetSummary || targetSummary.summaryStatus === 'missing') {
      console.error(`FAIL: Summary Alias target ${target} for ${alias} is missing or not complete/partial`);
      aliasErrorCount++;
      errors++;
    }
  }

  for (const work of works) {
    const summary = workSummaries[work.slug];
    if (!summary) continue;

    const evidence = workSourceEvidence[work.slug];

    // Check mismatches
    if (evidence) {
      if (evidence.extractionStatus === 'unavailable' && summary.summaryStatus !== 'unavailable') {
        console.error(`FAIL: Evidence is unavailable but summary is ${summary.summaryStatus} for ${work.slug}`);
        mismatchCount++;
        errors++;
      }

      if (evidence.extractionStatus === 'complete' && summary.summaryStatus === 'unavailable') {
        console.error(`FAIL: Evidence is complete but summary is unavailable for ${work.slug}`);
        mismatchCount++;
        errors++;
      }

      if (evidence.extractionStatus === 'partial' && summary.summaryStatus !== 'unavailable') {
        console.error(`FAIL: Evidence is partial but summary is not unavailable for ${work.slug}`);
        mismatchCount++;
        errors++;
      }

      if (evidence.documentCoverage === 'excerpt' && summary.summaryStatus === 'complete') {
        console.error(`FAIL: Document coverage is excerpt but summary is complete for ${work.slug}`);
        completeOnExcerptCount++;
        mismatchCount++;
        errors++;
      }
    } else {
      if (summary.summaryStatus !== 'unavailable') {
        console.error(`FAIL: No evidence manifest but summary is ${summary.summaryStatus} for ${work.slug}`);
        mismatchCount++;
        errors++;
      }
    }

    if (summary.summaryStatus === 'complete') {
      if (!evidence || evidence.extractionStatus !== 'complete') {
        console.error(`FAIL: Summary is complete but evidence is not complete for ${work.slug}`);
        mismatchCount++;
        errors++;
      }
      if (evidence && evidence.documentCoverage === 'full') {
        completeWithFullDocumentCoverageCount++;
      }
      rawCompleteCount++;
    } else if (summary.summaryStatus === 'partial') {
      if (!evidence || evidence.extractionStatus !== 'complete') {
        console.error(`FAIL: Summary is partial but evidence is not complete for ${work.slug}`);
        mismatchCount++;
        errors++;
      }
      rawPartialCount++;
    } else if (summary.summaryStatus === 'missing') {
      rawMissingCount++;
      continue;
    } else if (summary.summaryStatus === 'unavailable') {
      rawUnavailableCount++;
      continue;
    }

    if (!evidence) {
      console.error(`FAIL: Evidence manifest missing for COMPLETE/PARTIAL work: ${work.slug}`);
      completeWithoutVerifiedEvidence++;
      evidenceErrorCount++;
      errors++;
      continue;
    }

    let validEvidence = true;

    // Check source basis
    if (summary.sourceBasis.length === 0) {
      console.error(`FAIL: sourceBasis is empty for COMPLETE/PARTIAL work: ${work.slug}`);
      validEvidence = false;
      evidenceErrorCount++;
      errors++;
    }

    // Check no external urls
    if (summary.sourceBasis.some(s => s.includes('http://') || s.includes('https://'))) {
      console.error(`FAIL: sourceBasis contains external URLs in ${work.slug}`);
      validEvidence = false;
      evidenceErrorCount++;
      errors++;
    }

    // Check every sourceBasis exists in evidence
    for (const src of summary.sourceBasis) {
      const srcEvidence = evidence.sources.find(s => s.path === src);
      if (!srcEvidence) {
        console.error(`FAIL: sourceBasis path ${src} not found in evidence for ${work.slug}`);
        validEvidence = false;
        evidenceErrorCount++;
        errors++;
      }
    }

    // Check every primary source is readable and has sha256 + textLength
    let primaryReadable = 0;
    const requiredPrimaryCount = evidence.sources.filter(s => s.role === 'primary').length;

    for (const src of evidence.sources) {
      if (src.role === 'primary') {
        if (!src.readable) {
          console.error(`FAIL: Primary source ${src.path} is not readable for COMPLETE/PARTIAL work: ${work.slug}`);
          validEvidence = false;
          evidenceErrorCount++;
          errors++;
        } else {
          primaryReadable++;
        }
      }

      if (!src.sha256) {
        console.error(`FAIL: Missing SHA256 metadata for ${src.path} in ${work.slug}`);
        validEvidence = false;
        evidenceErrorCount++;
        errors++;
      }

      if (src.readable && src.textLength < 100) {
        console.error(`FAIL: textLength too small for readable source ${src.path} in ${work.slug}`);
        validEvidence = false;
        evidenceErrorCount++;
        errors++;
      }
    }

    if (evidence.sources.length > 0 && requiredPrimaryCount > 0 && primaryReadable !== requiredPrimaryCount) {
      console.error(`FAIL: Multipart work ${work.slug} is incomplete. Readable: ${primaryReadable}/${requiredPrimaryCount}`);
      multipartIncompleteCount++;
      errors++;
    }

    if (validEvidence) {
      verifiedSlugs.add(work.slug);
      if (summary.summaryStatus === 'complete' && evidence.documentCoverage === 'full') {
        rawCompleteWithVerifiedEvidence++;
      } else if (summary.summaryStatus === 'partial' && evidence.documentCoverage === 'excerpt') {
        rawPartialWithVerifiedEvidence++;
      }
    } else {
      if (summary.summaryStatus === 'complete') {
        completeWithoutVerifiedEvidence++;
      }
    }
  }

  let canonicalComplete = 0;
  let canonicalPartial = 0;
  let canonicalMissing = 0;
  let canonicalUnavailable = 0;
  let canonicalWithVerifiedEvidence = 0;

  for (const work of canonicalWorks) {
    const summary = workSummaries[work.slug];
    if (!summary) continue;

    if (summary.summaryStatus === 'complete') canonicalComplete++;
    else if (summary.summaryStatus === 'partial') canonicalPartial++;
    else if (summary.summaryStatus === 'missing') canonicalMissing++;
    else if (summary.summaryStatus === 'unavailable') canonicalUnavailable++;

    if (verifiedSlugs.has(work.slug)) {
      canonicalWithVerifiedEvidence++;
    }
  }

  const canonicalExclusionsCount = Object.keys(canonicalExclusions || {}).length;

  console.log(`\n--- SUMMARY VALIDATION REPORT ---`);
  console.log(`Raw work records: ${rawWorksCount}`);
  console.log(`Legacy alias records: ${legacyAliasCount}`);
  console.log(`Canonical exclusions: ${canonicalExclusionsCount}`);
  console.log(`Visible canonical works: ${visibleCanonicalCount}`);
  console.log();
  console.log(`Raw Complete: ${rawCompleteCount}`);
  console.log(`Raw Partial: ${rawPartialCount}`);
  console.log(`Raw Missing: ${rawMissingCount}`);
  console.log(`Raw Unavailable: ${rawUnavailableCount}`);
  console.log();
  console.log(`Canonical Complete: ${canonicalComplete}`);
  console.log(`Canonical Partial: ${canonicalPartial}`);
  console.log(`Canonical Missing: ${canonicalMissing}`);
  console.log(`Canonical Unavailable: ${canonicalUnavailable}`);
  console.log();
  console.log(`Canonical summaries with verified evidence: ${canonicalWithVerifiedEvidence}`);
  console.log(`Evidence/status mismatches: ${mismatchCount}`);
  console.log(`Alias accounting errors: ${aliasAccountingErrors}`);

  // Also log the debug details for raw
  console.log(`\n(Raw Debug: Complete with full coverage: ${completeWithFullDocumentCoverageCount}, Excerpt complete: ${completeOnExcerptCount}, Alias errors: ${aliasErrorCount}, Evidence errors: ${evidenceErrorCount})`);

  if (errors > 0) {
    process.exitCode = 1;
  }
}

validate();
