'use client';

import { ThemeProvider } from 'next-themes';

const NextThemeProvider = ({ children }: { children: any }) => (
  <ThemeProvider enableSystem={true} attribute="class">
    {children}
  </ThemeProvider>
);

export default NextThemeProvider;
