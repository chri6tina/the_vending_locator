import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Corpus Christi, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Corpus Christi, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Corpus Christi businesses.',
  keywords: 'haha coolers Corpus Christi, smart vending Corpus Christi Texas, grab and go cooler Corpus Christi, cashless vending Corpus Christi',
  openGraph: {
    title: 'Haha Smart Coolers in Corpus Christi, Texas',
    description: 'Revolutionary grab & go vending technology for Corpus Christi businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/corpus-christi-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/corpus-christi-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CorpusChristiTexasCoolerPageMetadata() {
  return <PageClient />;
}
