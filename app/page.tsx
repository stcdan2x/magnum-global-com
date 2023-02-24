import Accordion from '@/components/Accordion/Accordion';
import BasicStats from '@/components/BasicStats/BasicStats';
import Faq from '@/components/Faq/Faq';
import FeatureGrid from '@/components/FeatureGrid/FeatureGrid';
import HomepageHero from '@/components/HomepageHero/HomepageHero';
import SplitContent from '@/components/SplitContent/SplitContent';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <HomepageHero />
      <BasicStats />
      <SplitContent />
      <FeatureGrid />
      <Faq />
    </>
  );
}
