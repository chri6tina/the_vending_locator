import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Inglewood, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Inglewood, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Inglewood businesses.',
  keywords: 'haha coolers Inglewood, smart vending Inglewood California, grab and go cooler Inglewood, cashless vending Inglewood',
  openGraph: {
    title: 'Haha Smart Coolers in Inglewood, California',
    description: 'Revolutionary grab & go vending technology for Inglewood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/inglewood-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/inglewood-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function InglewoodCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
