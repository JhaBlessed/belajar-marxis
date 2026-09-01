import { works } from '../data/works';
import { workAliases } from '../data/workAliases';
import type { Work } from '../types';

export function isLegacyWorkSlug(slug: string): boolean {
  return slug in workAliases;
}

export function isCanonicalWorkSlug(slug: string): boolean {
  return !isLegacyWorkSlug(slug);
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
  const canonicalSlug = resolveWorkSlug(slug);
  return works.find(w => w.slug === canonicalSlug);
}

export function getCanonicalWorks(): Work[] {
  const canonicalSlugs = new Set<string>();
  const canonicalWorks: Work[] = [];

  for (const work of works) {
    if (isCanonicalWorkSlug(work.slug)) {
      if (!canonicalSlugs.has(work.slug)) {
        canonicalSlugs.add(work.slug);
        canonicalWorks.push(work);
      }
    }
  }

  return canonicalWorks;
}
