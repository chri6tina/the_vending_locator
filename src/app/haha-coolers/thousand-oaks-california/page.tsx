import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Thousand Oaks, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Thousand Oaks, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Thousand Oaks businesses.',
  keywords: 'haha coolers Thousand Oaks, smart vending Thousand Oaks California, grab and go cooler Thousand Oaks, cashless vending Thousand Oaks',
  openGraph: {
    title: 'Haha Smart Coolers in Thousand Oaks, California',
    description: 'Revolutionary grab & go vending technology for Thousand Oaks businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/thousand-oaks-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/thousand-oaks-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ThousandOaksCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
