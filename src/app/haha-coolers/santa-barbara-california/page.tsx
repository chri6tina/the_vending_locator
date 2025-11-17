import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Barbara, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Barbara, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Barbara businesses.',
  keywords: 'haha coolers Santa Barbara, smart vending Santa Barbara California, grab and go cooler Santa Barbara, cashless vending Santa Barbara',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Barbara, California',
    description: 'Revolutionary grab & go vending technology for Santa Barbara businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-barbara-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-barbara-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SantaBarbaraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
