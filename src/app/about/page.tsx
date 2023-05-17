import { Bio } from '@/lib/about-me';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Senior fullstack developer | writer',
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Saba.
      </p>
      <Bio />
    </section>
  );
}
