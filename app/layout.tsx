import './globals.css';
import {
  Montserrat,
  Aboreto,
  Allura,
  Merriweather,
  Raleway,
  Roboto,
  Open_Sans,
} from '@next/font/google';

const montserrat = Montserrat({
  weight: ['100', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const merriweather = Merriweather({
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-merriweather",
});

const opensans = Open_Sans({
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-opensans",
});

const raleway = Raleway({
  weight: ['100', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
