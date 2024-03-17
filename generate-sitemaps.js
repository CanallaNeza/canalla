// generate-sitemap.js

const fs = require('fs');
const globby = require('globby');

(async () => {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    // Añade o elimina patrones según las necesidades de tu proyecto
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages', '')
            .replace('.tsx', '')
            .replace('/index', '');
          const route = path === '/index' ? '' : path;
          return `
            <url>
              <loc>${`https://tudominio.com${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
