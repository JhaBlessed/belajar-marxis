import * as fs from 'fs';
import * as path from 'path';
import { works } from '../src/data/works';
import { curatedWorkSummaries } from './data/curated-work-summaries';
import { workSourceEvidence } from '../src/generated/workSourceEvidence';
import { WorkSummary, SummaryStatus } from '../src/generated/workSummaries';

const outputFilePath = path.join(import.meta.dirname, '../src/generated/workSummaries.ts');

/*
 * This script assembles curated summaries and verified source metadata.
 * It does not semantically generate summaries from source texts.
 */
async function main() {
  const result: Record<string, WorkSummary> = {};

  let completeCount = 0;
  let partialCount = 0;
  let unavailableCount = 0;
  let missingCount = 0;

  for (const work of works) {
    let curated = curatedWorkSummaries[work.slug];
    if (curated && (curated as any).$ref) {
      curated = { ...curatedWorkSummaries[(curated as any).$ref] };
    }

    const evidence = workSourceEvidence[work.slug];
    const sourceBasis: string[] = [];
    const contextBasis: string[] = [];

    if (evidence) {
      for (const src of evidence.sources) {
        if (src.role === 'primary') sourceBasis.push(src.path);
        else contextBasis.push(src.path);
      }
    }

    let status: SummaryStatus = 'missing';
    let unavailableReason: string | undefined = undefined;

    if (!evidence) {
      status = 'unavailable';
      unavailableReason = 'No extractable local primary source is available';
    } else if (evidence.extractionStatus === 'unavailable') {
      status = 'unavailable';
      if (evidence.sources.length === 0 || sourceBasis.length === 0) {
        unavailableReason = 'No extractable local primary source is available';
      } else {
        unavailableReason = 'Local primary sources exist but failed to extract (e.g., unreadable PDF)';
      }
    } else if (evidence.extractionStatus === 'partial') {
      status = 'unavailable';
      unavailableReason = 'Multipart primary sources are only partially readable';
    } else if (evidence.extractionStatus === 'complete' && sourceBasis.length > 0) {
      if (curated) {
        if (evidence.documentCoverage === 'excerpt') {
          status = 'partial';
        } else {
          status = 'complete';
        }
      } else {
        status = 'missing';
      }
    } else {
       // fallback
       status = 'unavailable';
       unavailableReason = 'No extractable local primary source is available';
    }

    result[work.slug] = {
      historicalContext: curated?.historicalContext || '',
      mainProblem: curated?.mainProblem || '',
      mainThesis: curated?.mainThesis || '',
      contentSummary: curated?.contentSummary || '',
      argumentStructure: curated?.argumentStructure || [],
      significance: curated?.significance || '',
      sourceBasis,
      contextBasis,
      summaryStatus: status,
      unavailableReason
    };

    if (status === 'complete') completeCount++;
    else if (status === 'partial') partialCount++;
    else if (status === 'unavailable') unavailableCount++;
    else missingCount++;
  }

  const outputContent = `/* eslint-disable max-len */
export type SummaryStatus = 'complete' | 'partial' | 'unavailable' | 'missing';

export interface WorkSummary {
  historicalContext: string;
  mainProblem: string;
  mainThesis: string;
  contentSummary: string;
  argumentStructure: string[];
  significance: string;
  sourceBasis: string[];
  contextBasis?: string[];
  summaryStatus: SummaryStatus;
  unavailableReason?: string;
}

export const workSummaries: Record<string, WorkSummary> = ${JSON.stringify(result, null, 2)};

export const summaryAliases: Record<string, string> = {
  'sosialisme-utopis-dan-ilmiah': 'sosialisme-utopis-dan-sosialisme-ilmiah',
  'tesis-tentang-feuerbach': 'tesis-tentang-feuerbach-versi-asli',
  'pendahuluan-sumbangan-untuk-kritik-terhadap-filsaf': 'pendahuluan-sumbangan-untuk-kritik-terhadap-filsafat-hak-hegel',
  'kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-': 'kata-pengantar-pada-sebuah-sumbangan-untuk-kritik-terhadap-ekonomi-politik'
};

export function getWorkSummary(slug: string): WorkSummary | undefined {
  if (workSummaries[slug] && workSummaries[slug].summaryStatus !== 'missing') {
    return workSummaries[slug];
  }
  const aliasTarget = summaryAliases[slug];
  if (aliasTarget && workSummaries[aliasTarget] && workSummaries[aliasTarget].summaryStatus !== 'missing') {
    return workSummaries[aliasTarget];
  }
  if (workSummaries[slug]) return workSummaries[slug];
  return undefined;
}
`;

  fs.writeFileSync(outputFilePath, outputContent);
  console.log(`Generated summaries for ${works.length} works.`);
  console.log(`Global Status: ${completeCount} complete, ${partialCount} partial, ${unavailableCount} unavailable (No source/PDFs/partial), ${missingCount} missing.`);
}

main().catch(console.error);
