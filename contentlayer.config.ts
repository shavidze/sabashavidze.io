import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  contentType: 'mdx',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
    summary: {
      type: 'string',
      required: true,
    },
    image: {
      type: 'string',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => {
        return doc._raw.flattenedPath;
      },
    },
    structuredData: {
      type: 'list',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.publishedAt,
        dateModified: doc.publishedAt,
        description: doc.summary,
        image: doc.image
          ? `https://sabashavidze.io/${doc.image}`
          : `https://sabashavidze.io/api/og?title=${doc.title}`,
        url: `https://sabashavidze.io/blog/${doc._raw.flattenedPath}`,
        author: {
          '@type': 'Person',
          name: 'Saba Shavidze',
        },
      }),
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
