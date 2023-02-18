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
  variable: '--font-merriweather',
});

const raleway = Raleway({
  weight: ['100', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-raleway',
});

const opensans = Open_Sans({
  weight: ['300', '400', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const fontMontserrat = montserrat.className;
export const fontMerriweather = merriweather.className;
export const fontRaleway = raleway.className;
export const fontOpensans = opensans.className;
