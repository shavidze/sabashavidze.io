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
  return <>Hey, I&rsquo;m Saba. I like engineering.</>;
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
          As a <b>Engineer</b> with expertise in <b>C#, .NET, and JavaScript</b>
          , I bring a strong technical background, analytical skills, and a
          problem-solving mindset to my work. In my current role within the
          banking industry, I handle extensive database operations, primarily
          focusing on <b>SQL</b>. I actively listen to customer requests,
          implement enhancements for better user experiences, and collaborate
          with senior developers to meet critical deadlines. My experience
          includes managing both <b>SQL and NoSQL databases</b>, proficiently
          writing queries, and optimizing database performance. Additionally, I
          utilize containerization with <b>Docker</b> to create scalable and
          portable applications.
        </motion.p>
        <hr />
        <motion.p variants={item}>
          I have complex expertise with <b>AWS</b> and deployment using{' '}
          <b>Terraform</b> and <b>GitLab/GitHub Actions</b>. This allows me to
          manage cloud infrastructure and automate deployment processes
          effectively. Furthermore, I am well-versed in{' '}
          <b>Agile SCRUM methodology</b> and actively participate in agile
          development processes, including sprint planning, daily stand-ups, and
          retrospectives. I thrive in collaborative environments, contributing
          to cross-functional teams and engaging in effective communication to
          ensure project success.
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
