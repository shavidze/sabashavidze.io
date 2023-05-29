import { allPosts } from 'contentlayer/generated';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = allPosts.map((post) => {
    return {
      url: `https://sabashavidze.io/blog/${post.slug}`,
      lastModified: post.publishedAt,
    };
  });

  const routes = ['', '/about', '/blog'].map((route) => {
    return {
      url: `https://sabashavidze.io${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    };
  });
  return [...blogs, ...routes];
}
