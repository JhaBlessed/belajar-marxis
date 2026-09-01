import { workSummaries, summaryAliases } from '../src/generated/workSummaries';
import { works } from '../src/data/works';
import { workSourceEvidence } from '../src/generated/workSourceEvidence';

function validate() {
  let errors = 0;

  let completeCount = 0;
  let completeWithEvidenceCount = 0;
  let completeWithoutEvidenceCount = 0;
  let missingCount = 0;
  let unavailableCount = 0;
  let multipartIncompleteCount = 0;
  let aliasErrorCount = 0;
  let evidenceErrorCount = 0;
  let mismatchCount = 0;

  // Track alias cycles
  for (const [alias, target] of Object.entries(summaryAliases)) {
    if (summaryAliases[target]) {
      console.error(`FAIL: Alias cycle detected: ${alias} -> ${target} -> ${summaryAliases[target]}`);
      aliasErrorCount++;
      errors++;
    }
    const targetSummary = workSummaries[target];
    if (!targetSummary || targetSummary.summaryStatus === 'missing') {
      console.error(`FAIL: Alias target ${target} for ${alias} is missing or not complete`);
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
    }

    if (summary.summaryStatus === 'missing') {
      missingCount++;
      continue;
    }
    if (summary.summaryStatus === 'unavailable') {
      unavailableCount++;
      continue;
    }

    completeCount++;

    if (!evidence) {
      console.error(`FAIL: Evidence manifest missing for COMPLETE work: ${work.slug}`);
      completeWithoutEvidenceCount++;
      evidenceErrorCount++;
      errors++;
      continue;
    }

    let validEvidence = true;

    // Check source basis
    if (summary.sourceBasis.length === 0) {
      console.error(`FAIL: sourceBasis is empty for COMPLETE work: ${work.slug}`);
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
          console.error(`FAIL: Primary source ${src.path} is not readable for COMPLETE work: ${work.slug}`);
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
      completeWithEvidenceCount++;
    } else {
      completeWithoutEvidenceCount++;
    }
  }

  console.log(`\n--- SUMMARY VALIDATION REPORT ---`);
  console.log(`Canonical works: ${works.length}`);
  console.log(`Complete: ${completeCount}`);
  console.log(`Missing: ${missingCount}`);
  console.log(`Unavailable: ${unavailableCount}`);
  console.log(`Complete with verified evidence: ${completeWithEvidenceCount}`);
  console.log(`Complete without verified evidence: ${completeWithoutEvidenceCount}`);
  console.log(`Multipart incomplete: ${multipartIncompleteCount}`);
  console.log(`Alias errors: ${aliasErrorCount}`);
  console.log(`Evidence errors: ${evidenceErrorCount}`);
  console.log(`Evidence/status mismatches: ${mismatchCount}`);

  if (errors > 0) {
    process.exitCode = 1;
  }
}

validate();
