import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Clara, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Clara, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Clara businesses.',
  keywords: 'haha coolers Santa Clara, smart vending Santa Clara California, grab and go cooler Santa Clara, cashless vending Santa Clara',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Clara, California',
    description: 'Revolutionary grab & go vending technology for Santa Clara businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-clara-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-clara-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SantaClaraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
