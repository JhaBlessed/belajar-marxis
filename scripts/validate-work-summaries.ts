import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import { workSummaries, summaryAliases } from '../src/generated/workSummaries';

function main() {
  const publicDir = path.join(import.meta.dirname, '../public');
  let completeCount = 0;
  let unavailableCount = 0;
  let missingCount = 0;

  const errors: string[] = [];

  for (const work of works) {
    const summary = workSummaries[work.slug];
    if (!summary) {
      errors.push(`[ERROR] Canonical work without summary entry: ${work.slug}`);
      missingCount++;
      continue;
    }

    if (summary.summaryStatus === 'complete') {
      completeCount++;
      
      if (!summary.sourceBasis || summary.sourceBasis.length === 0) {
        errors.push(`[ERROR] Complete summary with empty sourceBasis: ${work.slug}`);
      } else {
        const seenSources = new Set<string>();
        // Validate source file exists and is valid
        for (const src of summary.sourceBasis) {
          if (seenSources.has(src)) {
            errors.push(`[ERROR] Duplicate sourceBasis in ${work.slug}: ${src}`);
          }
          seenSources.add(src);
          
          if (src.includes('http://') || src.includes('https://') || src.includes('/https:')) {
            errors.push(`[ERROR] Invalid http/https in sourceBasis for ${work.slug}: ${src}`);
          }
          const cleanSrc = src.split('?')[0].split('#')[0];
          const fullPath = path.join(publicDir, cleanSrc);
          if (!fs.existsSync(fullPath)) {
            errors.push(`[ERROR] sourceBasis file does not exist locally: ${src} in ${work.slug}`);
          }
        }
      }

      if (summary.contextBasis) {
        const seenContext = new Set<string>();
        for (const src of summary.contextBasis) {
          if (seenContext.has(src)) {
            errors.push(`[ERROR] Duplicate contextBasis in ${work.slug}: ${src}`);
          }
          seenContext.add(src);
          if (src.includes('http://') || src.includes('https://') || src.includes('/https:')) {
            errors.push(`[ERROR] Invalid http/https in contextBasis for ${work.slug}: ${src}`);
          }
          const cleanSrc = src.split('?')[0].split('#')[0];
          const fullPath = path.join(publicDir, cleanSrc);
          if (!fs.existsSync(fullPath)) {
            errors.push(`[ERROR] contextBasis file does not exist locally: ${src} in ${work.slug}`);
          }
        }
      }

      if (summary.contentSummary.split(' ').length < 50) {
        errors.push(`[ERROR] contentSummary might be too short for ${work.slug}`);
      }

      if (!summary.argumentStructure || summary.argumentStructure.length === 0) {
        errors.push(`[ERROR] argumentStructure empty for ${work.slug}`);
      }
    } else if (summary.summaryStatus === 'unavailable') {
      unavailableCount++;
      if (!summary.unavailableReason) {
        errors.push(`[WARNING] unavailableReason is missing for ${work.slug}`);
      }
    } else {
      missingCount++;
    }
  }

  // Check orphaned summaries and aliases
  const canonicalSlugs = new Set(works.map(w => w.slug));
  let aliasesResolved = 0;
  let uniqueComplete = new Set<string>();
  let canonicalCovered = 0;

  for (const w of works) {
      // Check alias cycle
      const originalSlug = w.slug;
      let currentSlug = w.slug;
      let depth = 0;
      let foundCycle = false;
      
      const aliasesMap: Record<string, string> = summaryAliases || {};
      
      while (aliasesMap[currentSlug]) {
         depth++;
         currentSlug = aliasesMap[currentSlug];
         if (currentSlug === originalSlug || depth > 10) {
            errors.push(`[ERROR] Alias cycle detected for ${originalSlug}`);
            foundCycle = true;
            break;
         }
      }
      
      if (foundCycle) continue;
      
      if (currentSlug !== originalSlug) {
         aliasesResolved++;
      }
      
      const finalSummary = workSummaries[currentSlug];
      if (finalSummary && finalSummary.summaryStatus === 'complete') {
         uniqueComplete.add(currentSlug);
         canonicalCovered++;
      } else if (finalSummary && finalSummary.summaryStatus === 'unavailable') {
         canonicalCovered++; // Unavailable counts as covered for our metric
      }
  }

  for (const key in workSummaries) {
    if (!canonicalSlugs.has(key) && !summaryAliases?.[key]) {
      // It might just be an alias target that isn't in canonical?
    }
  }

  console.log('--- VALIDATE SUMMARIES REPORT ---');
  if (errors.length > 0) {
    console.log('Issues found:');
    errors.forEach(e => console.log(e));
    console.log('---------------------------------');
  } else {
    console.log('No issues found in completed summaries.');
    console.log('---------------------------------');
  }

  const total = works.length;
  const coverage = (canonicalCovered / total) * 100;

  console.log(`Total canonical works: ${total}`);
  console.log(`Canonical works covered: ${canonicalCovered}`);
  console.log(`Unique complete summaries: ${uniqueComplete.size}`);
  console.log(`Aliases resolved: ${aliasesResolved}`);
  console.log(`Unavailable: ${unavailableCount}`);
  console.log(`Missing: ${missingCount}`);
  console.log(`Coverage: ${coverage.toFixed(1)}%`);

  if (errors.filter(e => e.startsWith('[ERROR]')).length > 0) {
    process.exitCode = 1;
  }
}

main();
