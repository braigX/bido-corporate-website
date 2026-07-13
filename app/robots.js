export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/'] },
    sitemap: 'https://bido.ma/sitemap.xml',
    host: 'https://bido.ma',
  };
}
