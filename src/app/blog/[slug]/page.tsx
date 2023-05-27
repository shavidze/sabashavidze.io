/* eslint-disable @typescript-eslint/no-shadow */
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import Balancer from 'react-wrap-balancer';
import { Mdx } from '@/components/mdx/mdx';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }
  const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    slug,
    image,
  } = post;
  const ogImage = image
    ? `${PUBLIC_URL}${image}`
    : `${PUBLIC_URL}api/og?title=${title}`;
  // eslint-disable-next-line consistent-return
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${PUBLIC_URL}blog/${slug}`,
      images: [{ url: ogImage }],
    },
  };
}

const BlogPost: FC<Props> = ({ params }) => {
  const { slug } = params;
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const post = allPosts.find((post) => post.slug === slug);
  if (!post) {
    notFound();
  }

  return (
    <section>
      {typeof window !== 'undefined' && (
        <script type="application/ld+json">
          {JSON.stringify(post.structuredData)}
        </script>
      )}
      <h1 className="font-bold text-3xl font-serif max-w-[650px]">
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className="grid grid-cols-[auto_1fr_auto] items-center mt-4 mb-8 font-mono text-sm max-w-[650px]">
        <div className="bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
          {post.publishedAt}
        </div>
        <div className="h-[0.2em] bg-neutral-50 dark:bg-neutral-800 mx-2" />
        {/* <ViewCounter slug={post.slug} trackView /> */}
      </div>
      <>
        <Mdx code={post.body.code} />
      </>
    </section>
  );
};
export default BlogPost;
