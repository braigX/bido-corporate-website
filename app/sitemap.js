import { legalPages, productPages, solutionPages } from '../src/config';
import { localizedHref } from '../src/localized-content';

const baseUrl = 'https://bido.ma';
const corePaths = ['/', '/tarifs', '/a-propos', '/contact', '/demo', '/faq', '/ressources', '/blog', '/ressources/veille-structuree'];

export default function sitemap() {
  const paths = [...corePaths, ...Object.keys(productPages), ...Object.keys(solutionPages), ...Object.keys(legalPages)];
  return [...new Set(paths)].flatMap((path) => ['fr','en','ar'].map((locale) => ({
    url: `${baseUrl}${localizedHref(locale, path) === '/' ? '' : localizedHref(locale, path)}`,
    lastModified: new Date(), changeFrequency: path === '/' ? 'weekly' : 'monthly', priority: path === '/' ? 1 : path === '/demo' ? 0.9 : 0.7,
    alternates: { languages: { fr: `${baseUrl}${localizedHref('fr',path) === '/' ? '' : localizedHref('fr',path)}`, en: `${baseUrl}${localizedHref('en',path)}`, ar: `${baseUrl}${localizedHref('ar',path)}` } },
  })));
}
