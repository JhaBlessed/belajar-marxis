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
  let unavailableCount = 0;
  let missingCount = 0;

  for (const work of works) {
    const isMarxEngels = work.authorId === 'karl-marx' || 
                         work.authorId === 'friedrich-engels' || 
                         (work.authorIds && (work.authorIds.includes('karl-marx') || work.authorIds.includes('friedrich-engels')));

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

    if (isMarxEngels) {
      if (curated) {
        let status: SummaryStatus = 'missing';
        
        // Completion rule check
        if (evidence && evidence.extractionStatus === 'complete' && sourceBasis.length > 0) {
          status = 'complete';
        } else if (evidence && evidence.extractionStatus === 'partial') {
          status = 'unavailable';
        }

        result[work.slug] = {
          historicalContext: curated.historicalContext || '',
          mainProblem: curated.mainProblem || '',
          mainThesis: curated.mainThesis || '',
          contentSummary: curated.contentSummary || '',
          argumentStructure: curated.argumentStructure || [],
          significance: curated.significance || '',
          sourceBasis,
          contextBasis,
          summaryStatus: status,
          unavailableReason: status === 'unavailable' ? 'Beberapa bagian primary source (PDF/HTML) tidak dapat diekstrak' : undefined
        };
        
        if (status === 'complete') completeCount++;
        else if (status === 'unavailable') unavailableCount++;
        else missingCount++;
      } else {
        let status: SummaryStatus = 'missing';
        if (evidence && evidence.extractionStatus === 'unavailable' && evidence.sources.length > 0) {
          status = 'unavailable';
        }
        
        result[work.slug] = {
          historicalContext: '',
          mainProblem: '',
          mainThesis: '',
          contentSummary: '',
          argumentStructure: [],
          significance: '',
          sourceBasis,
          contextBasis,
          summaryStatus: status,
          unavailableReason: status === 'unavailable' ? 'Ekstraksi dokumen primary gagal' : undefined
        };
        
        if (status === 'unavailable') unavailableCount++;
        else missingCount++;
      }
    } else {
      result[work.slug] = {
        historicalContext: '',
        mainProblem: '',
        mainThesis: '',
        contentSummary: '',
        argumentStructure: [],
        significance: '',
        sourceBasis,
        summaryStatus: 'missing'
      };
    }
  }

  const outputContent = `/* eslint-disable max-len */
export type SummaryStatus = 'complete' | 'unavailable' | 'missing';

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
  'tesis-tentang-feuerbach': 'tesis-tentang-feuerbach-versi-asli'
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
  console.log(`Batch 1 (Marx/Engels) Status: ${completeCount} complete, ${unavailableCount} unavailable (PDFs/partial), ${missingCount} missing.`);
}

main().catch(console.error);
