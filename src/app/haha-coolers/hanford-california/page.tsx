import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hanford, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hanford, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hanford businesses.',
  keywords: 'haha coolers Hanford, smart vending Hanford California, grab and go cooler Hanford, cashless vending Hanford',
  openGraph: {
    title: 'Haha Smart Coolers in Hanford, California',
    description: 'Revolutionary grab & go vending technology for Hanford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hanford-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hanford-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HanfordCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
