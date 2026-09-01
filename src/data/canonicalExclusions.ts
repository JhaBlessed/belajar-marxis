export type CanonicalExclusionKind = 'fragment' | 'container' | 'format-helper';

export interface CanonicalExclusion {
  kind: CanonicalExclusionKind;
  parentSlug?: string;
}

export const canonicalExclusions: Record<string, CanonicalExclusion> = {
  'bag-2': { kind: 'fragment', parentSlug: 'kapital-jilid-2' },
  'bag-3': { kind: 'fragment', parentSlug: 'kapital-jilid-2' },
  'bab-21-36': { kind: 'fragment', parentSlug: 'kapital-jilid-3' },
  'bab-37-43': { kind: 'fragment', parentSlug: 'kapital-jilid-3' },
  'bab-44-52': { kind: 'fragment', parentSlug: 'kapital-jilid-3' },
  'pdf-format': { kind: 'format-helper', parentSlug: 'upah-harga-dan-laba' }
};
