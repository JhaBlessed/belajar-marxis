export type MetadataConfidence = 'high' | 'medium' | 'low';

export interface Provenance {
  sourceId: string;
  url: string;
  checkedAt: string;
}

export interface SourceRegistryItem {
  id: string;
  name: string;
  shortName: string;
  url: string;
  type: 'portal' | 'archive-index' | 'history-index' | 'author-archive' | 'primary-text' | 'history-local-archive';
  description: string;
  priority: number;
  trusted: boolean;
  localRoot?: string;
}

export interface Author {
  id: string;
  slug?: string;
  name: string;
  fullName: string;
  birthYear: number;
  deathYear: number;
  nationality: string;
  shortBio: string;
  biography: string;
  themes: string[];
  concepts: string[];
  recommendedWorks: string[];
  relatedAuthors: string[];
  image: string;
  sources: string[];
  // Provenance
  sourceIds?: string[];
  verifiedFrom?: Provenance[];
  metadataConfidence?: MetadataConfidence;
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  originalTitle: string | null;
  authorId?: string;
  authorIds?: string[];
  year: number | null;
  category: string;
  difficulty: 'Pemula' | 'Menengah' | 'Mahir';
  readingTime: number; // in minutes
  themes: string[];
  concepts: string[];
  summary: {
    historicalContext: string;
    mainProblem: string;
    mainThesis: string;
    structure: string;
    contentSummary: string;
  };
  importance: string;
  debates: string;
  studyQuestions: string[];
  relatedWorks: string[];
  miaUrl: string | null;
  localMirrorPath?: string;
  hasLocalMirror?: boolean;
  sourceAvailability?: 'local-and-online' | 'local-only' | 'online-only' | 'missing';
  format?: 'multi-pdf' | 'html' | 'markdown' | 'pdf';
  sourceFormat?: 'pdf' | 'multi-pdf' | 'html' | 'multi-html' | 'external';
  localSourcePath?: string;
  localSourceParts?: Array<{
    title: string;
    path: string;
    sourcePartKind?: 'main' | 'appendix' | 'preface' | 'editorial';
  }>;
  sourceType?: string;
  parts?: Array<{
    number: number;
    title: string;
    type: 'pdf' | 'html' | 'markdown';
    localPath: string;
  }>;
  editorIds?: string[];
  rightsStatus: 'public-domain' | 'cc-by-sa' | 'copyrighted' | 'permission-required' | 'unknown';
  rightsNote?: string;
  sourceCredit?: string;
  translator?: string;
  transcriber?: string;
  proofreader?: string;
  sourceEdition?: string;
  fullTextEnabled: boolean;
  fullTextPath?: string;
  originalLanguage?: string;
  translationLanguage?: string;
  verifiedAt?: string;
  contentStatus: 'complete' | 'partial' | 'external-only' | 'not-imported';
  
  // Provenance
  sourceIds?: string[];
  primarySourceUrl?: string;
  archiveIndexUrl?: string;
  historyContextUrl?: string;
  sourceCheckedAt?: string;
  metadataConfidence?: MetadataConfidence;
  verificationNotes?: string;
  verifiedFrom?: Provenance[];
}

export interface Chapter {
  id: string;
  workId: string;
  slug: string;
  title: string;
  order: number;
  contentPath?: string;
}

export interface Concept {
  id: string;
  slug: string;
  name: string;
  shortDefinition: string;
  definition: string;
  history: string;
  authors: string[];
  works: string[];
  relatedConcepts: string[];
  debates: string;
  // Provenance
  sourceIds?: string[];
  verifiedFrom?: Provenance[];
  metadataConfidence?: MetadataConfidence;
}

export interface Organization {
  id: string;
  slug: string;
  name: string;
  abbreviation?: string;
  foundedYear?: number;
  dissolvedYear?: number;
  description: string;
  relatedAuthorIds?: string[];
  relatedWorkIds?: string[];
  relatedEventIds: string[];
  localSourcePath?: string;
  originalSourceUrl?: string;
  sourceIds?: string[];
  metadataConfidence?: "high" | "medium" | "low";
  relationEvidence?: {
    entityType: 'author' | 'work' | 'organization' | 'historical-person';
    entityId: string;
    confidence: 'high' | 'medium' | 'low';
    matchedText: string;
    sourcePath?: string;
  }[];

}

export interface TimelineEvent {
  id: string;
  slug: string;
  date?: string;
  year?: number | null;
  title: string;
  description: string;
  category?: "organization" | "publication" | "person" | "movement" | "colonial" | "revolution" | "international" | "party" | "labor" | "education" | "event";
  
  relatedAuthorIds: string[];
  relatedWorkIds: string[];
  relatedOrganizationIds?: string[];
  relatedHistoricalPersonIds?: string[];
  
  sourceIds?: string[];
  localSourcePath?: string;
  originalSourceUrl?: string;
  sourceCheckedAt?: string;
  metadataConfidence: "high" | "medium" | "low";

  
  relationEvidence?: {
    entityType: 'author' | 'work' | 'organization' | 'historical-person';
    entityId: string;
    confidence: 'high' | 'medium' | 'low';
    matchedText: string;
    sourcePath?: string;
  }[];
  // legacy compatibility

  type?: string;
  authorIds?: string[];
  workIds?: string[];
  country?: string;
  themes?: string[];
}

export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  level: 'Pemula' | 'Menengah' | 'Mahir';
  description: string;
  durationWeeks: number;
  weeks: {
    weekNumber: number;
    title: string;
    description: string;
    workIds: string[];
  }[];
}


export interface HistoricalPerson {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  birthYear?: number;
  deathYear?: number;
  shortDescription?: string;
  biography?: string;
  relatedEventIds: string[];
  relatedOrganizationIds: string[];
  relatedWorkIds: string[];
  localSourcePaths: string[];
  originalSourceUrls: string[];
  metadataConfidence: 'high' | 'medium' | 'low';
}
