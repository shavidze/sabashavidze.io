import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
});
