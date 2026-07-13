import { legalPages, productPages, solutionPages } from '../src/config';

const baseUrl = 'https://bido.ma';
const corePaths = ['/', '/tarifs', '/a-propos', '/contact', '/demo', '/faq', '/ressources', '/blog', '/ressources/veille-structuree'];

export default function sitemap() {
  const paths = [...corePaths, ...Object.keys(productPages), ...Object.keys(solutionPages), ...Object.keys(legalPages)];
  return [...new Set(paths)].map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path === '/demo' ? 0.9 : 0.7,
  }));
}
