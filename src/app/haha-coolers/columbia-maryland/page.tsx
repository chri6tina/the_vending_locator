import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbia, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbia, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbia businesses.',
  keywords: 'haha coolers Columbia, smart vending Columbia Maryland, grab and go cooler Columbia, cashless vending Columbia',
  openGraph: {
    title: 'Haha Smart Coolers in Columbia, Maryland',
    description: 'Revolutionary grab & go vending technology for Columbia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbia-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbia-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ColumbiaMarylandCoolerPageMetadata() {
  return <PageClient />;
}
