'use client';

import { useTheme } from 'next-themes';
import { IconMoonFilled, IconBrightness2 } from '@tabler/icons-react';
import { Switch } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';

const ThemeManager = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { resolvedTheme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [mount, setMount] = useState<boolean>(false);
  useEffect(() => {
    if (!mount) {
      setMount(true);
    }
    setEnabled(resolvedTheme === 'dark');
  }, [mount, setEnabled, resolvedTheme]);
  const DarkIcon = () => (
    <div className="absolute translate-x-0 rounded-lg bg-white">
      <IconMoonFilled size={17} />
    </div>
  );
  const LightIcon = () => (
    <div className="absolute translate-x-5 rounded-lg bg-slate-700">
      <IconBrightness2 size={17} />
    </div>
  );
  if (!mount) return <></>;
  return (
    <div className="absolute right-0">
      <Switch
        checked={enabled}
        onChange={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          const newTheme = enabled ? 'light' : 'dark';
          setTheme(newTheme);
          setEnabled(!enabled);
        }}
        as={Fragment}
      >
        {() => (
          <button
            className={`${
              enabled ? 'bg-white' : 'bg-slate-600'
            } p-[2px] sticky top-20 cursor-pointer border motion-reduce:transition-none transition-all duration-[500ms] inline-flex h-6 w-11 items-center rounded-full focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2`}
          >
            {enabled ? <LightIcon /> : <DarkIcon />}
          </button>
        )}
      </Switch>
    </div>
  );
};

export default ThemeManager;
