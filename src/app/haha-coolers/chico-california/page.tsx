import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chico, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chico, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chico businesses.',
  keywords: 'haha coolers Chico, smart vending Chico California, grab and go cooler Chico, cashless vending Chico',
  openGraph: {
    title: 'Haha Smart Coolers in Chico, California',
    description: 'Revolutionary grab & go vending technology for Chico businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chico-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chico-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ChicoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
