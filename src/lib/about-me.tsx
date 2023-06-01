'use client';

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import * as me from '../app/avatar.png';
import LinkItem from './ui/LinkItem';

export const name = 'Saba Shavidze';
export const avatar = me;

export const About = () => {
  return (
    <>
      I&rsquo;m Saba, a full-stack Software Engineer with a deep passion for web
      development. While my expertise lies in traditional programming, my
      journey expands into exciting frontiers. I embrace cutting-edge
      technologies, exploring the potential of blockchain, functional
      programming paradigms, and distributed systems. I thrive on staying
      updated with the latest trends in the dynamic realm of software
      engineering, continuously evolving to deliver innovative solutions
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

  const LinkItemStyle =
    'flex w-full border border-neutral-800 dark:border-neutral-200 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between';

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
          Furthermore, my passion for <b>algorithms and data structures </b>
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
          <LinkItem
            text="Twitter"
            href="https://twitter.com/SShavi1"
            style={LinkItemStyle}
          >
            <IconBrandTwitter fill="#0077B5" stroke={0} size={20} />
          </LinkItem>
          <LinkItem
            text="Github"
            href="https://github.com/shavidze"
            style={LinkItemStyle}
          >
            <IconBrandGithub size={20} fill="#00000" />
          </LinkItem>
          <LinkItem
            text="Linkedin"
            href="https://www.linkedin.com/in/saba-shavidze-1b395094/"
            style={LinkItemStyle}
          >
            <IconBrandLinkedin fill="#0077b5" color="#ffffff" stroke={2} />
          </LinkItem>
        </motion.div>
      </motion.div>
    </>
  );
};
