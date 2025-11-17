import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Imperial Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Imperial Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Imperial Beach businesses.',
  keywords: 'haha coolers Imperial Beach, smart vending Imperial Beach California, grab and go cooler Imperial Beach, cashless vending Imperial Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Imperial Beach, California',
    description: 'Revolutionary grab & go vending technology for Imperial Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/imperial-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/imperial-beach-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ImperialBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
