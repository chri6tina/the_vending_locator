import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sonoma, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sonoma, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sonoma businesses.',
  keywords: 'haha coolers Sonoma, smart vending Sonoma California, grab and go cooler Sonoma, cashless vending Sonoma',
  openGraph: {
    title: 'Haha Smart Coolers in Sonoma, California',
    description: 'Revolutionary grab & go vending technology for Sonoma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sonoma-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sonoma-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SonomaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
