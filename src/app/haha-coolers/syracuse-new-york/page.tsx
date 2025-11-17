import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Syracuse, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Syracuse, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Syracuse businesses.',
  keywords: 'haha coolers Syracuse, smart vending Syracuse New York, grab and go cooler Syracuse, cashless vending Syracuse',
  openGraph: {
    title: 'Haha Smart Coolers in Syracuse, New York',
    description: 'Revolutionary grab & go vending technology for Syracuse businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/syracuse-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/syracuse-new-york',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SyracuseNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
