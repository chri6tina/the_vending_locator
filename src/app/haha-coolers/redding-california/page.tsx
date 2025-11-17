import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Redding, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Redding, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Redding businesses.',
  keywords: 'haha coolers Redding, smart vending Redding California, grab and go cooler Redding, cashless vending Redding',
  openGraph: {
    title: 'Haha Smart Coolers in Redding, California',
    description: 'Revolutionary grab & go vending technology for Redding businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/redding-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/redding-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ReddingCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
