import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Angelo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Angelo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Angelo businesses.',
  keywords: 'haha coolers San Angelo, smart vending San Angelo California, grab and go cooler San Angelo, cashless vending San Angelo',
  openGraph: {
    title: 'Haha Smart Coolers in San Angelo, California',
    description: 'Revolutionary grab & go vending technology for San Angelo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-angelo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-angelo-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanAngeloCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
