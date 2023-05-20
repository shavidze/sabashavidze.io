import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

type Props = {
  isActive: boolean;
  path: string;
  name: string;
};
const NavbarItem: FC<Props> = ({ isActive, name, path }) => {
  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
        {
          'text-neutral-500': !isActive,
          'font-bold': isActive,
        }
      )}
    >
      <span className="relative py-[5px] px-[10px]">
        {name}
        {isActive ? (
          <motion.div
            className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
            layoutId="sidebar"
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />
        ) : null}
      </span>
    </Link>
  );
};

export default NavbarItem;
