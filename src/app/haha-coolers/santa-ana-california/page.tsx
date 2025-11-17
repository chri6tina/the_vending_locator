import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Ana, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Ana, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Ana businesses.',
  keywords: 'haha coolers Santa Ana, smart vending Santa Ana California, grab and go cooler Santa Ana, cashless vending Santa Ana',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Ana, California',
    description: 'Revolutionary grab & go vending technology for Santa Ana businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-ana-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-ana-california',
  },
};

export default function SantaAnaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
