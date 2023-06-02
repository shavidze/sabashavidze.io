'use client';

import { useTheme } from 'next-themes';
import { IconMoonFilled, IconBrightness2 } from '@tabler/icons-react';
import { Switch } from '@headlessui/react';
import { Fragment, useState } from 'react';

const ThemeManager = () => {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  const DarkIcon = () => (
    <div className="absolute translate-x-0">
      <IconMoonFilled />
    </div>
  );
  const LightIcon = () => (
    <div className="absolute translate-x-5 ">
      <IconBrightness2 />
    </div>
  );
  return (
    <div className="absolute right-0">
      <Switch
        checked={enabled}
        onChange={() => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          enabled ? setTheme('light') : setTheme('dark');
          setEnabled(!enabled);
        }}
        as={Fragment}
      >
        {() => (
          <button
            className={`cursor-pointer border motion-reduce:transition-none transition-transform duration-1000 inline-flex h-6 w-11 items-center rounded-full focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2`}
          >
            {enabled ? <LightIcon /> : <DarkIcon />}
          </button>
        )}
      </Switch>
    </div>
  );
};

export default ThemeManager;
