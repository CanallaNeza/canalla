// generate-sitemaps.mjs
import fs from 'fs';

// Definir explícitamente las rutas de los componentes que quieres incluir en el sitemap
const routes = [
  '/',
  '/about', // Asumiendo que podrías tener una ruta /about, ajusta según tu necesidad
  '/projects', // Asumiendo /projects, ajusta según tu necesidad
  // Añade aquí otras rutas según las necesidades de tu proyecto
];

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map((route) => {
      return `
        <url>
          <loc>https://canallaneza.art${route}</loc>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

fs.writeFileSync('public/sitemap.xml', sitemap);
