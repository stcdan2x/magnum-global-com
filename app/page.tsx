import Accordion from '@/components/Accordion/Accordion';
import Faq from '@/components/Faq/Faq';
import HomepageHero from '@/components/HomepageHero/HomepageHero';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Faq />
    </>
  );
}
