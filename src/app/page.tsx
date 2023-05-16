'use client';

import Image from 'next/image';
import { about, name, avatar } from '../lib/about-me';
import HelloWorld from '../../content/hello.mdx';

const Home = () => {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-8 font-serif">{name}</h1>
      <Image
        alt={name}
        className="rounded-full  "
        src={avatar}
        placeholder="blur"
        width={100}
        priority
      />
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <HelloWorld />
    </section>
  );
};
export default Home;
