import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Eugene, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Eugene, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Eugene businesses.',
  keywords: 'haha coolers Eugene, smart vending Eugene Oregon, grab and go cooler Eugene, cashless vending Eugene',
  openGraph: {
    title: 'Haha Smart Coolers in Eugene, Oregon',
    description: 'Revolutionary grab & go vending technology for Eugene businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/eugene-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/eugene-oregon',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EugeneOregonCoolerPageMetadata() {
  return <PageClient />;
}
