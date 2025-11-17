import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Francisco, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Francisco, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Francisco businesses.',
  keywords: 'haha coolers San Francisco, smart vending San Francisco California, grab and go cooler San Francisco, cashless vending San Francisco',
  openGraph: {
    title: 'Haha Smart Coolers in San Francisco, California',
    description: 'Revolutionary grab & go vending technology for San Francisco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-francisco-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-francisco-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanFranciscoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
