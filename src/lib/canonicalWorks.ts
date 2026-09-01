import { works } from '../data/works';
import { workAliases } from '../data/workAliases';
import { canonicalExclusions } from '../data/canonicalExclusions';
import type { CanonicalExclusion } from '../data/canonicalExclusions';
import type { Work } from '../types';

export function isLegacyWorkSlug(slug: string): boolean {
  return slug in workAliases;
}

export function isCanonicalExcludedSlug(slug: string): boolean {
  return slug in canonicalExclusions;
}

export function getCanonicalExclusion(slug: string): CanonicalExclusion | undefined {
  return canonicalExclusions[slug];
}

export function isCanonicalWorkSlug(slug: string): boolean {
  return !isLegacyWorkSlug(slug) && !isCanonicalExcludedSlug(slug);
}

export function resolveWorkSlug(slug: string): string {
  let currentSlug = slug;
  const seen = new Set<string>();

  while (currentSlug in workAliases) {
    if (seen.has(currentSlug)) {
      console.warn(`Alias cycle detected for slug: ${slug}`);
      return slug; // Break cycle by returning original
    }
    seen.add(currentSlug);
    currentSlug = workAliases[currentSlug];
  }

  return currentSlug;
}

export function getWorkBySlug(slug: string): Work | undefined {
  // getWorkBySlug must return raw works even if they are excluded,
  // but it should still resolve aliases!
  // Aliases point to identical works. Exclusions are still works but not listed canonically.
  const canonicalSlug = resolveWorkSlug(slug);
  return works.find(w => w.slug === canonicalSlug);
}

export function getCanonicalWorks(worksList: Work[] = works): Work[] {
  const canonicalSlugs = new Set<string>();
  const canonicalWorksList: Work[] = [];

  for (const work of worksList) {
    if (isCanonicalWorkSlug(work.slug)) {
      if (!canonicalSlugs.has(work.slug)) {
        canonicalSlugs.add(work.slug);
        canonicalWorksList.push(work);
      }
    }
  }

  return canonicalWorksList;
}
