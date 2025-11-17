import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sunnyvale, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sunnyvale, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sunnyvale businesses.',
  keywords: 'haha coolers Sunnyvale, smart vending Sunnyvale California, grab and go cooler Sunnyvale, cashless vending Sunnyvale',
  openGraph: {
    title: 'Haha Smart Coolers in Sunnyvale, California',
    description: 'Revolutionary grab & go vending technology for Sunnyvale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sunnyvale-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sunnyvale-california',
  },
};

export default function SunnyvaleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
