'use client';

import { useTheme } from 'next-themes';
import { IconMoonFilled, IconBrightness2 } from '@tabler/icons-react';
import { motion } from 'framer-motion';

const ThemeManager = () => {
  const { theme, setTheme } = useTheme();
  const DarkIcon = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <IconMoonFilled onClick={() => setTheme('dark')} />
    </motion.div>
  );
  const LightIcon = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <IconBrightness2 onClick={() => setTheme('light')} />
    </motion.div>
  );
  return (
    <div className="absolute right-0 cursor-pointer">
      {theme === 'light' ? <DarkIcon /> : <LightIcon />}
    </div>
  );
};

export default ThemeManager;
