import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Troy, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Troy, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Troy businesses.',
  keywords: 'haha coolers Troy, smart vending Troy New York, grab and go cooler Troy, cashless vending Troy',
  openGraph: {
    title: 'Haha Smart Coolers in Troy, New York',
    description: 'Revolutionary grab & go vending technology for Troy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/troy-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/troy-new-york',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TroyNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
