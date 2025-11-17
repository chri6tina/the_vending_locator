import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Victorville, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Victorville, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Victorville businesses.',
  keywords: 'haha coolers Victorville, smart vending Victorville California, grab and go cooler Victorville, cashless vending Victorville',
  openGraph: {
    title: 'Haha Smart Coolers in Victorville, California',
    description: 'Revolutionary grab & go vending technology for Victorville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/victorville-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/victorville-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VictorvilleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
