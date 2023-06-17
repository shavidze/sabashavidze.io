'use client';

import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState } from 'react';
import Switch from './Switch';

const ThemeManager = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { resolvedTheme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState<boolean>(false);
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    if (!mount) {
      setMount(true);
    }
    setEnabled(resolvedTheme === 'dark');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mount]);
  const handleSwitch = () => {
    const newTheme = enabled ? 'light' : 'dark';
    setTheme(newTheme);
    setEnabled(!enabled);
  };
  if (!mount) return <></>;
  return (
    <div className="absolute right-0">
      <Switch onSwitch={handleSwitch} enabled={enabled} duration={750} />
    </div>
  );
};

export default ThemeManager;
