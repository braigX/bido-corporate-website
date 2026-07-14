export const dynamic = 'force-static';

const stylesheet = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Bido.ma XML Sitemap</title>
        <style>
          *{box-sizing:border-box}body{margin:0;background:#f8fafc;color:#0b1220;font-family:Arial,sans-serif}header{background:#0b1220;color:white;padding:42px 0}main,header div{width:min(1180px,calc(100% - 40px));margin:auto}h1{margin:0 0 8px;font-size:30px}header p{margin:0;color:#94a3b8}.summary{display:flex;gap:12px;margin:28px 0}.summary span{background:#eff6ff;color:#1d4ed8;border:1px solid #bfdbfe;padding:8px 12px;border-radius:999px;font-size:13px;font-weight:700}.table-wrap{overflow:auto;background:white;border:1px solid #e2e8f0;border-radius:10px;box-shadow:0 14px 40px rgba(15,23,42,.06);margin-bottom:50px}table{border-collapse:collapse;width:100%;min-width:850px}th{text-align:left;background:#f1f5f9;color:#475569;font-size:11px;letter-spacing:.08em;text-transform:uppercase;padding:14px 16px}td{padding:14px 16px;border-top:1px solid #e2e8f0;font-size:13px}td:first-child{font-family:monospace;color:#1d4ed8}tr:hover td{background:#f8fbff}.locale{display:inline-block;min-width:34px;text-align:center;background:#e2e8f0;border-radius:4px;padding:2px 6px;font-size:11px;font-weight:700}footer{padding:0 0 35px;color:#64748b;font-size:12px}@media(max-width:640px){header{padding:30px 0}h1{font-size:24px}}
        </style>
      </head>
      <body>
        <header><div><h1>Bido.ma XML Sitemap</h1><p>Indexable public pages for French, English and Arabic.</p></div></header>
        <main>
          <div class="summary"><span><xsl:value-of select="count(s:urlset/s:url)" /> URLs</span><span>3 languages</span><span>Updated 2026-07-14</span></div>
          <div class="table-wrap"><table><thead><tr><th>URL</th><th>Language</th><th>Last modified</th><th>Frequency</th><th>Priority</th></tr></thead><tbody>
            <xsl:for-each select="s:urlset/s:url">
              <tr><td><a><xsl:attribute name="href"><xsl:value-of select="s:loc" /></xsl:attribute><xsl:value-of select="s:loc" /></a></td><td><span class="locale"><xsl:choose><xsl:when test="contains(s:loc, '/ar')">AR</xsl:when><xsl:when test="contains(s:loc, '/en')">EN</xsl:when><xsl:otherwise>FR</xsl:otherwise></xsl:choose></span></td><td><xsl:value-of select="s:lastmod" /></td><td><xsl:value-of select="s:changefreq" /></td><td><xsl:value-of select="s:priority" /></td></tr>
            </xsl:for-each>
          </tbody></table></div>
          <footer>This sitemap is generated for search engines and styled for human review.</footer>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

export async function GET() {
  return new Response(stylesheet, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
