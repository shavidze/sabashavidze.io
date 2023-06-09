import './globals.css';
import { Kaisei_Tokumin } from 'next/font/google';
import NextThemeProvider from '@/app/ThemeProvider';
import ThemeManager from '@/components/ThemeManager';
import Navbar from '../components/Navigation/Navbar';

const inter = Kaisei_Tokumin({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kaisei',
});

const PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
export const metadata = {
  title: {
    default: 'Saba Shavidze',
    template: '%s | Saba Shavidze',
  },
  description: 'Developer and writer.',
  openGraph: {
    title: 'Saba Shavidze',
    description: 'Developer, writer, and creator.',
    url: `${PUBLIC_URL}`,
    siteName: 'Saba Shavidze',
    images: [
      {
        url: `${PUBLIC_URL}og.png`,
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1, // allow to generate larger previews
      'max-snippet': -1, // google can display longer text snippets for relevant pages
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} dark`}
    >
      <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
        <NextThemeProvider>
          <Navbar />
          {children}
          <ThemeManager />
        </NextThemeProvider>
      </body>
    </html>
  );
}
