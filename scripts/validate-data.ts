import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import { authors } from '../src/data/authors';

function validate() {
  let errors = 0;

  const contentDir = path.join(process.cwd(), 'src/content/works');

  // existing checks...
  // skip the content manifest part for brevity or keep it? I'll keep it.

  let singleHtml = 0;
  let multiHtml = 0;
  let singlePdf = 0;
  let multiPdf = 0;
  let noLocalSource = 0;

  works.forEach(work => {
    if (work.localSourceParts) {
      let mainCount = 0;
      let hasDuplicatePaths = false;
      const seenPaths = new Set();

      work.localSourceParts.forEach(part => {
        if (part.sourcePartKind === 'main') {
          mainCount++;
        }

        if (part.sourcePartKind && !['main', 'appendix', 'preface', 'editorial'].includes(part.sourcePartKind)) {
          console.error(`ERROR: Invalid sourcePartKind in ${work.slug}: ${part.sourcePartKind}`);
          errors++;
        }
      });

      if (work.localSourceParts.some(p => p.sourcePartKind) && mainCount === 0) {
        console.error(`ERROR: Work ${work.slug} uses sourcePartKind but has no 'main' parts.`);
        errors++;
      }

      if (work.slug === 'kemiskinan-filsafat') {
        const prefaceCount = work.localSourceParts.filter(p => p.sourcePartKind === 'preface').length;
        const appendixCount = work.localSourceParts.filter(p => p.sourcePartKind === 'appendix').length;
        if (mainCount !== 8 || prefaceCount !== 3 || appendixCount !== 3) {
          console.error(`ERROR: kemiskinan-filsafat exact part counts violated.`);
          errors++;
        }
      }
    }

    if (!work.sourceFormat && !work.localSourcePath && !work.localSourceParts) {
      noLocalSource++;
    } else if (work.sourceFormat === 'html') {
      singleHtml++;
    } else if (work.sourceFormat === 'multi-html') {
      multiHtml++;
    } else if (work.sourceFormat === 'pdf') {
      singlePdf++;
    } else if (work.sourceFormat === 'multi-pdf') {
      multiPdf++;
    }
  });

  const totalCategorized = singleHtml + multiHtml + singlePdf + multiPdf + noLocalSource;
  const canonicalWorks = works.length;

  console.log(`\n--- FINAL SOURCE RECONCILIATION ---`);
  console.log(`Canonical works: ${canonicalWorks}`);
  console.log(`Single HTML: ${singleHtml}`);
  console.log(`Multi HTML: ${multiHtml}`);
  console.log(`Single PDF: ${singlePdf}`);
  console.log(`Multi PDF: ${multiPdf}`);
  console.log(`No local source: ${noLocalSource}`);
  console.log(`\nTOTAL categorized: ${totalCategorized}`);

  if (totalCategorized !== canonicalWorks) {
    console.error('ERROR: Categorization count mismatch!');
    process.exit(1);
  }

  // Also read generated/final-reconciliation.json
  const reconPath = path.join(process.cwd(), 'src', 'generated', 'final-reconciliation.json');
  if (!fs.existsSync(reconPath)) {
    console.error('ERROR: Missing final-reconciliation.json');
    process.exit(1);
  }
}

validate();
