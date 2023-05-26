'use client';

import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  type: 'success' | 'fail';
  title: string;
  messages: string[];
};
const InfoCard: FC<Props> = ({ type, title, messages }) => {
  const cssClasses = clsx(
    'border bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full',
    {
      'border-red-200 dark:border-red-900': type === 'fail',
      'border-emerald-200 dark:border-emerald-900': type === 'success',
    }
  );
  return (
    <div className={cssClasses}>
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {messages.map((message) => (
          <div key={message} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCard;
