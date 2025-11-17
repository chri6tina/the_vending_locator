import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yonkers, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yonkers, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yonkers businesses.',
  keywords: 'haha coolers Yonkers, smart vending Yonkers New York, grab and go cooler Yonkers, cashless vending Yonkers',
  openGraph: {
    title: 'Haha Smart Coolers in Yonkers, New York',
    description: 'Revolutionary grab & go vending technology for Yonkers businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yonkers-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yonkers-new-york',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function YonkersNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
