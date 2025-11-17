import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ithaca, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ithaca, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ithaca businesses.',
  keywords: 'haha coolers Ithaca, smart vending Ithaca New York, grab and go cooler Ithaca, cashless vending Ithaca',
  openGraph: {
    title: 'Haha Smart Coolers in Ithaca, New York',
    description: 'Revolutionary grab & go vending technology for Ithaca businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ithaca-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ithaca-new-york',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function IthacaNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
