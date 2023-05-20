/* eslint-disable import/prefer-default-export */

'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';

interface MdxProps {
  code: string;
}
// This file is required to use MDX in `app` directory.
export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert ">
      <Component />
    </article>
  );
};
