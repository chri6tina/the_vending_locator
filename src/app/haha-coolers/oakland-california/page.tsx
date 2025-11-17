import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oakland, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oakland, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oakland businesses.',
  keywords: 'haha coolers Oakland, smart vending Oakland California, grab and go cooler Oakland, cashless vending Oakland',
  openGraph: {
    title: 'Haha Smart Coolers in Oakland, California',
    description: 'Revolutionary grab & go vending technology for Oakland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oakland-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oakland-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OaklandCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
