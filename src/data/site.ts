export const SITE = {
  url: 'https://davidluengojuarez.com',
  brand: 'DLJ Tech',
  legalName: 'David Luengo Juarez LLC',
  person: 'David Luengo Juárez',
  linkedin: 'https://www.linkedin.com/in/david-luengo-juarez/',
  github: 'https://github.com/daluj',
  tally: { id: 'wk107o', url: 'https://tally.so/r/wk107o' },
  modified: '2026-10-22',
  analyticsDomain: 'davidluengojuarez.com',
};

export type Lang = 'es' | 'en';

/** Path helpers: Spanish is the default language (no prefix), English lives under /en/. */
export const home = (l: Lang) => (l === 'es' ? '/' : '/en/');
export const caseUrl = (l: Lang, slug: string) =>
  l === 'es' ? `/casos/${slug}/` : `/en/cases/${slug}/`;
export const privacyUrl = (l: Lang) => (l === 'es' ? '/privacidad/' : '/en/privacy/');
