/* eslint-disable import/prefer-default-export */

import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import Admotion from './Admotion';
import CustomLink from './CustomLink';
import InfoCard from './InfoCard';

const components = {
  a: CustomLink,
  Image: (props: any) => {
    return <Image alt={props.alt} className="rounded-lg" {...props} />;
  },
  InfoCard,
  Admotion,
};

interface MdxProps {
  code: string;
}

// This file is required to use MDX in `app` directory.
export const Mdx = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert ">
      <Component components={{ ...components }} />
    </article>
  );
};
