'use client';

import {
  IconArrowUpRight,
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import * as me from '../app/avatar.jpeg';

export const name = 'Saba Shavidze';
export const avatar = me;
export const About = () => {
  return (
    <>
      I'm Saba. I'm the
      <b> Software Engineer </b> with a strong interest in web development. My
      journey extends beyond traditional programming as I delve into the
      fascinating realms of blockchain technology, functional programming
      paradigms, and distributed systems. Additionally, I make it a point to
      stay abreast of the latest trends in the ever-evolving world of
      programming.
    </>
  );
};
export const Bio: FC<{}> = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200"
      >
        <motion.p variants={item}>
          As a <b>Fullstack JavaScript Developer</b> with experience in
          <b> Angular, React, Next.js, Sveltekit, Node.js, and Nest.js</b>, I
          have a strong technical background, analytical skills, and a
          problem-solving mindset. In my previous roles, I actively listened to
          customer requests, implemented better user experience, and assisted
          other senior developers to meet pressing deadlines. I have experience
          working with both <b>SQL and NoSQL databases</b>, and I am proficient
          in writing queries and managing database operations. Additionally, I
          am well-versed in utilizing containerization with <b>Docker</b> to
          create portable and scalable applications.
        </motion.p>
        <hr />
        <motion.p variants={item}>
          My expertise extends to various UI libraries, including{' '}
          <b>
            Material, Clarity, Kendo UI, Mantine, Skeleton UI, and Tailwind{' '}
          </b>
          enabling me to develop visually appealing and intuitive user
          interfaces. I have also worked with video players, both by utilizing
          existing libraries and by developing them from scratch, which has
          given me a deep understanding of multimedia integration and playback
          in web applications.
        </motion.p>
        <hr />
        <motion.p variants={item}>
          Furthermore, my passion for <b>algorithms and data structures</b>
          enhances my ability to develop efficient and performant web
          applications. I continuously strive to optimize code and explore
          innovative approaches to problem-solving. With my comprehensive skill
          set and experience in web development, along with my proficiency in
          <b> Node.js, Nest.js, SQL, NoSQL databases, and Docker</b>, I am
          well-equipped to tackle diverse challenges and contribute to the
          success of web application development projects.
        </motion.p>
        <motion.p variants={item} className="mb-8">
          Moreover, I am familiar with <b>Agile SCRUM methodology</b> and have
          actively participated in agile development processes, including sprint
          planning, daily stand-ups, and retrospectives. I thrive in
          collaborative environments, where I can contribute to cross-functional
          teams and engage in effective communication to ensure project success.
        </motion.p>
        <motion.div
          variants={item}
          className="flex flex-col gap-2 md:flex-row md:gap-2"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/SShavi1"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <IconBrandTwitterFilled />
              <div className="ml-3">Twitter</div>
            </div>
            <IconArrowUpRight />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/shavidze"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <IconBrandGithubFilled />
              <div className="ml-3">GitHub</div>
            </div>
            <IconArrowUpRight />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/saba-shavidze-1b395094/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <IconBrandLinkedin />
              <div className="ml-3">Linkedin</div>
            </div>
            <IconArrowUpRight />
          </a>
        </motion.div>
      </motion.div>
    </>
  );
};
