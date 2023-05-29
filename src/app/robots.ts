import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    host: 'https://sabashavidze.io',
    sitemap: 'https://sabashavidze.io/sitemap.xml',
  };
}
