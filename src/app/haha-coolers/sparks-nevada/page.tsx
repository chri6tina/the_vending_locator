import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sparks, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sparks, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sparks businesses.',
  keywords: 'haha coolers Sparks, smart vending Sparks Nevada, grab and go cooler Sparks, cashless vending Sparks',
  openGraph: {
    title: 'Haha Smart Coolers in Sparks, Nevada',
    description: 'Revolutionary grab & go vending technology for Sparks businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sparks-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sparks-nevada',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SparksNevadaCoolerPageMetadata() {
  return <PageClient />;
}
