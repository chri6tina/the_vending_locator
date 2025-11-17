import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Seal Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Seal Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Seal Beach businesses.',
  keywords: 'haha coolers Seal Beach, smart vending Seal Beach California, grab and go cooler Seal Beach, cashless vending Seal Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Seal Beach, California',
    description: 'Revolutionary grab & go vending technology for Seal Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/seal-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/seal-beach-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SealBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
