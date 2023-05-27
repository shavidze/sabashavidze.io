/* eslint-disable no-param-reassign */
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import rehypeColorChips from 'rehype-color-chips';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;

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
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.publishedAt,
        dateModified: doc.publishedAt,
        description: doc.summary,
        image: doc.image
          ? `${PUBLIC_URL}${doc.image}`
          : `${PUBLIC_URL}api/og?title=${doc.title}`,
        url: `${PUBLIC_URL}/blog/${doc._raw.flattenedPath}`,
        author: {
          '@type': 'Person',
          name: 'Saba Shavidze',
        },
      }),
    },
  },
}));
const rehypePrettyCodeOptions = {
  theme: 'one-dark-pro',
  onVisitLine(node: { children: string | any[] }) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node: { properties: { className: string[] } }) {
    // Each line node by default has `class="line"`.
    node.properties.className.push('highlighted');
  },
  onVisitHighlightedWord(node: { properties: { className: string[] } }) {
    // Each word node has no className by default.
    node.properties.className = ['word'];
  },
};

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, rehypePrettyCodeOptions],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      rehypeColorChips,
    ],
  },
});
