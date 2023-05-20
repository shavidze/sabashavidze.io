'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { name, avatar, About } from '../lib/about-me';

const Home = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { duration: 1, delay: 0.1 },
    },
  };
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
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200"
      >
        {/* <About /> */}
      </motion.p>
    </section>
  );
};
export default Home;
