// generate-sitemaps.mjs

import fs from 'fs';
import { globby } from 'globby';

(async () => {
  const pages = await globby([
    'pages/**/*.tsx',
    '!pages/_*.tsx',
    '!pages/api',
    // Añade o elimina patrones según las necesidades de tu proyecto
  ]);
  console.log(pages);
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map((page) => {
          const path = page
            .replace('pages/', '')
            .replace('.tsx', '')
            .replace('/index', '');
          const route = path === 'index' ? '' : path;
          return `
            <url>
              <loc>${`https://canallaneza.art${route}`}</loc>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  fs.writeFileSync('public/sitemap.xml', sitemap);
})();
