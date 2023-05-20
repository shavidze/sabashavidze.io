import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { FC } from 'react';
import Balancer from 'react-wrap-balancer';
import { useMDXComponent } from 'next-contentlayer/hooks';

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
  const MDXContent = useMDXComponent(post.body.code);
  console.log(MDXContent);

  return (
    <section>
      <script type="application/ld+json">
        {JSON.stringify(post.structuredData)}
      </script>
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
        <MDXContent />
        {/* <Mdx code={post.body.code} tweets={tweets} /> */}
      </>
    </section>
  );
};
export default BlogPost;
