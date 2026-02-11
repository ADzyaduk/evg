type SitemapEntry = {
  loc: string
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
  lastmod?: string
}

export default defineEventHandler((event) => {
  const config = useRuntimeConfig();

  const rawSiteUrl = config.public.siteUrl || 'https://pavlovcraft.ru';
  const baseUrl = rawSiteUrl.replace(/\/$/, '');

  const urls: SitemapEntry[] = [
    // Основные страницы
    { loc: '/', changefreq: 'weekly', priority: 1.0 },
    { loc: '/blog', changefreq: 'weekly', priority: 0.9 },
    { loc: '/katalog', changefreq: 'weekly', priority: 0.9 },
    { loc: '/uslugi', changefreq: 'monthly', priority: 0.8 },
    { loc: '/o-kompanii', changefreq: 'yearly', priority: 0.6 },
    { loc: '/o-nas', changefreq: 'yearly', priority: 0.5 },
    { loc: '/otzyvy', changefreq: 'monthly', priority: 0.6 },
    { loc: '/kontakty', changefreq: 'yearly', priority: 0.7 },

    // Статьи блога
    {
      loc: '/blog/kak-vybrat-tkan-dlya-sadovykh-podushek',
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: '2025-01-15'
    },
    {
      loc: '/blog/ukhod-za-ulichnymi-podushkami',
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: '2025-01-20'
    },
    {
      loc: '/blog/kakie-tkani-dlya-yaht',
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: '2025-01-25'
    },
    {
      loc: '/blog/ulichnye-i-interernye-podushki',
      changefreq: 'yearly',
      priority: 0.7,
      lastmod: '2025-01-28'
    }
  ];

  const bodyLines: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  for (const url of urls) {
    bodyLines.push('  <url>');
    bodyLines.push(`    <loc>${baseUrl}${url.loc}</loc>`);

    if (url.lastmod) {
      bodyLines.push(`    <lastmod>${url.lastmod}</lastmod>`);
    }

    if (url.changefreq) {
      bodyLines.push(`    <changefreq>${url.changefreq}</changefreq>`);
    }

    if (typeof url.priority === 'number') {
      bodyLines.push(`    <priority>${url.priority.toFixed(1)}</priority>`);
    }

    bodyLines.push('  </url>');
  }

  bodyLines.push('</urlset>');

  const xml = bodyLines.join('\n');

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8');

  return xml;
}

