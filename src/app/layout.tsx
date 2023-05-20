import './globals.css';
import { Kaisei_Tokumin } from 'next/font/google';
import Navbar from '../components/Navigation/Navbar';

const inter = Kaisei_Tokumin({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kaisei',
});

export const metadata = {
  title: {
    default: 'Saba Shavidze',
    template: '%s | Saba Shavidze',
  },
  description: 'Developer and writer.',
  openGraph: {
    title: 'Saba Shavidze',
    description: 'Developer, writer, and creator.',
    url: 'https://sabashavidze.io',
    siteName: 'Saba Shavidze',
    images: [
      {
        url: 'https://sabashavidze.io/og.jpg',
        width: 1920,
        height: 1080,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body
        suppressHydrationWarning={true}
        className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
