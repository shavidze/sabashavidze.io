import { IconArticle } from '@tabler/icons-react';
import { allPosts, Post } from 'contentlayer/generated';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my articles and thoughts on software development and more',
};

const Blog = () => {
  const sortByPublishDate = (a: Post, b: Post) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  };
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Blog</h1>
      {allPosts.sort(sortByPublishDate).map((post) => (
        <div key={post.slug} className="flex">
          <IconArticle className="mr-1" fill="#0077B5" />
          <Link
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
              {/* TODO: add View Counter */}
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Blog;
