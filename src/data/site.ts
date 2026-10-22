export const SITE = {
  url: 'https://davidluengojuarez.com',
  brand: 'DLJ Tech',
  legalName: 'David Luengo Juarez LLC',
  person: 'David Luengo Juárez',
  linkedin: 'https://www.linkedin.com/in/david-luengo-juarez/',
  github: 'https://github.com/daluj',
  tally: { id: 'wk107o', url: 'https://tally.so/r/wk107o' },
  whatsapp: '34677242463',
  /** Portrait: drop a file in /public (e.g. '/david.jpg') and set it here. Null shows an initials placeholder. */
  photo: null as string | null,
  /** Real figures only, e.g. { es: ['120 h/mes ahorradas'], en: ['120 h/month saved'] }. The strip is hidden while empty. */
  stats: { es: [] as { v: string; l: string }[], en: [] as { v: string; l: string }[] },
  modified: '2026-10-22',
  analyticsDomain: 'davidluengojuarez.com',
};

export type Lang = 'es' | 'en';

/** Path helpers: Spanish is the default language (no prefix), English lives under /en/. */
export const home = (l: Lang) => (l === 'es' ? '/' : '/en/');
export const caseUrl = (l: Lang, slug: string) =>
  l === 'es' ? `/casos/${slug}/` : `/en/cases/${slug}/`;
export const privacyUrl = (l: Lang) => (l === 'es' ? '/privacidad/' : '/en/privacy/');
export const waUrl = (msg: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;
