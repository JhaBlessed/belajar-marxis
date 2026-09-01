import { workAliases } from '../src/data/workAliases';
import { canonicalExclusions } from '../src/data/canonicalExclusions';
import { works } from '../src/data/works';
import { workSourceEvidence } from '../src/generated/workSourceEvidence';
import { getCanonicalWorks, isCanonicalWorkSlug } from '../src/lib/canonicalWorks';

function validate() {
  let errors = 0;
  let overlapErrors = 0;
  let accountingErrors = 0;

  // WORK ALIASES
  for (const [legacy, target] of Object.entries(workAliases)) {
    if (workAliases[target]) {
      console.error(`FAIL: Alias cycle or chain detected: ${legacy} -> ${target} -> ${workAliases[target]}`);
      errors++;
    }

    const targetWork = works.find(w => w.slug === target);
    if (!targetWork) {
      console.error(`FAIL: Target missing for alias ${legacy}: target ${target} not in works.ts`);
      errors++;
    }

    const legacyWork = works.find(w => w.slug === legacy);
    if (!legacyWork) {
      console.error(`FAIL: Legacy work missing for alias ${legacy}: ${legacy} not in works.ts`);
      errors++;
    }

    if (targetWork && legacyWork) {
       const ev1 = workSourceEvidence[target];
       const ev2 = workSourceEvidence[legacy];
       const prim1 = ev1?.sources.find(s => s.role === 'primary')?.sha256 || targetWork.localSourcePath;
       const prim2 = ev2?.sources.find(s => s.role === 'primary')?.sha256 || legacyWork.localSourcePath;

       if (!prim1 || !prim2 || prim1 !== prim2) {
          console.error(`FAIL: Alias pair ${legacy} -> ${target} does not share the same primary source SHA/Path!`);
          errors++;
       }
    }

    if (isCanonicalWorkSlug(legacy)) {
      console.error(`FAIL: Alias slug ${legacy} is incorrectly visible as canonical!`);
      errors++;
    }

    if (targetWork && !isCanonicalWorkSlug(target) && !canonicalExclusions[target]) {
      console.error(`FAIL: Preferred target ${target} is not visible as canonical, but it's not excluded!`);
      errors++;
    }
  }

  // CANONICAL EXCLUSIONS
  let fragmentCount = 0;
  let containerCount = 0;
  let formatHelperCount = 0;

  for (const [slug, exclusion] of Object.entries(canonicalExclusions)) {
    if (exclusion.kind === 'fragment') fragmentCount++;
    if (exclusion.kind === 'container') containerCount++;
    if (exclusion.kind === 'format-helper') formatHelperCount++;

    if (!works.find(w => w.slug === slug)) {
      console.error(`FAIL: Exclusion slug ${slug} not found in works.ts`);
      errors++;
    }
    if (workAliases[slug]) {
      console.error(`FAIL: Alias/exclusion overlap: ${slug} is in both workAliases and canonicalExclusions!`);
      overlapErrors++;
    }
    if (!['fragment', 'container', 'format-helper'].includes(exclusion.kind)) {
      console.error(`FAIL: Invalid kind for exclusion ${slug}: ${exclusion.kind}`);
      errors++;
    }
    if (exclusion.parentSlug) {
      if (!works.find(w => w.slug === exclusion.parentSlug)) {
        console.error(`FAIL: Parent slug missing for exclusion ${slug}: ${exclusion.parentSlug} not in works.ts`);
        errors++;
      }
    }
    if (isCanonicalWorkSlug(slug)) {
      console.error(`FAIL: Exclusion slug ${slug} is incorrectly visible as canonical!`);
      errors++;
    }
  }

  const visibleWorks = getCanonicalWorks(works);

  // Duplicate check
  const seenSlugs = new Set();
  for (const w of visibleWorks) {
    if (seenSlugs.has(w.slug)) {
      console.error(`FAIL: Duplicate visible canonical slug: ${w.slug}`);
      errors++;
    }
    seenSlugs.add(w.slug);
  }

  const rawCount = works.length;
  const legacyCount = Object.keys(workAliases).length;
  const exclusionCount = Object.keys(canonicalExclusions).length;

  if (visibleWorks.length !== (rawCount - legacyCount - exclusionCount)) {
    console.error(`FAIL: Canonical accounting error! ${visibleWorks.length} !== ${rawCount} - ${legacyCount} - ${exclusionCount}`);
    accountingErrors++;
  }

  console.log("=== WORK ALIASES VALIDATION REPORT ===");
  console.log(`Raw works count: ${rawCount}`);
  console.log(`Legacy alias works: ${legacyCount}`);
  console.log(`Canonical exclusions: ${exclusionCount}`);
  console.log(`  Fragments: ${fragmentCount}`);
  console.log(`  Containers: ${containerCount}`);
  console.log(`  Format helpers: ${formatHelperCount}`);
  console.log(`Visible canonical works: ${visibleWorks.length}`);
  console.log();
  console.log(`Alias/exclusion overlap errors: ${overlapErrors}`);
  console.log(`Canonical accounting errors: ${accountingErrors}`);

  if (errors > 0 || overlapErrors > 0 || accountingErrors > 0) {
    process.exitCode = 1;
  }
}

validate();
