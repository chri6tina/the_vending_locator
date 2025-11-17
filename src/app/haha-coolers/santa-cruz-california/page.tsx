import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Cruz, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Cruz, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Cruz businesses.',
  keywords: 'haha coolers Santa Cruz, smart vending Santa Cruz California, grab and go cooler Santa Cruz, cashless vending Santa Cruz',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Cruz, California',
    description: 'Revolutionary grab & go vending technology for Santa Cruz businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-cruz-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-cruz-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SantaCruzCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
