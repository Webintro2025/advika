import { locations } from '../../marketplace';

export async function GET() {
  // Change this to your deployed domain
  const baseUrl = 'https://advikanaturals.com';



 

  // Location slugs used in /in/[slug]
  const locationSlugs = locations.map((loc) =>
    loc.toLowerCase().replace(/\s+/g, '-'),
  );

  const allRoutes = [
 
 
    ...locationSlugs.map((slug) => `/${slug}`),
  ];

  const urls = allRoutes
    .map((route) => {
      const loc = `${baseUrl}${route === '/' ? '' : route}`;
      let priority = '0.8';
      if (route === '/') priority = '1.0';
      else if (route.startsWith('/products/')) priority = '0.9';
      else if (route.startsWith('/in/')) priority = '0.7';
      return `    <url>\n      <loc>${loc}</loc>\n      <changefreq>weekly</changefreq>\n      <priority>${priority}</priority>\n    </url>`;
    })
    .join('\n');

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
