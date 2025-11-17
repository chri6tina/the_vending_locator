import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Albany, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Albany, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Albany businesses.',
  keywords: 'haha coolers Albany, smart vending Albany New York, grab and go cooler Albany, cashless vending Albany',
  openGraph: {
    title: 'Haha Smart Coolers in Albany, New York',
    description: 'Revolutionary grab & go vending technology for Albany businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/albany-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/albany-new-york',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AlbanyNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
