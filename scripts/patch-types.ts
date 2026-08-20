import * as fs from 'fs';

let content = fs.readFileSync('src/types/index.ts', 'utf8');

const orgRegex = /export interface Organization \{[\s\S]*?(?=\nexport interface TimelineEvent)/;
const newOrg = `export interface Organization {
  id: string;
  slug: string;
  name: string;
  abbreviation?: string;
  foundedYear?: number;
  dissolvedYear?: number;
  description: string;
  relatedAuthorIds: string[];
  relatedWorkIds: string[];
  relatedEventIds: string[];
  localSourcePath?: string;
  originalSourceUrl?: string;
  sourceIds?: string[];
  metadataConfidence: "high" | "medium" | "low";
}
`;
content = content.replace(orgRegex, newOrg);

const timelineRegex = /export interface TimelineEvent \{[\s\S]*?(?=\nexport interface LearningPath)/;
const newTimeline = `export interface TimelineEvent {
  id: string;
  slug: string;
  date?: string;
  year?: number | null;
  title: string;
  description: string;
  category: "organization" | "publication" | "person" | "movement" | "colonial" | "revolution" | "international" | "party" | "labor" | "education";
  
  relatedAuthorIds: string[];
  relatedWorkIds: string[];
  relatedOrganizationIds: string[];
  
  sourceIds: string[];
  localSourcePath?: string;
  originalSourceUrl?: string;
  sourceCheckedAt?: string;
  metadataConfidence: "high" | "medium" | "low";

  // legacy compatibility
  type?: string;
  authorIds?: string[];
  workIds?: string[];
  country?: string;
  themes?: string[];
}
`;
content = content.replace(timelineRegex, newTimeline);

fs.writeFileSync('src/types/index.ts', content);
console.log('Types updated');
