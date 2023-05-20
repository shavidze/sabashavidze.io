import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { FC } from 'react';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}
const BlogPost: FC<Props> = ({ params }) => {
  const { slug } = params;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }
  return <></>;
};
export default BlogPost;
