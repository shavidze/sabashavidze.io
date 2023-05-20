/* eslint-disable import/prefer-default-export */

'use client';

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import CustomLink from './CustomLink';
import InfoCard from './InfoCard';

const components = {
  InfoCard,
  a: CustomLink,
  Image: ({ props }) => (
    <Image alt={props.alt} className="rounded-lg" {...props} />
  ),
};

interface MdxProps {
  code: string;
}

// This file is required to use MDX in `app` directory.
export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert ">
      <Component components={components} />
    </article>
  );
};
