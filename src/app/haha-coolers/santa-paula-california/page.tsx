import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Paula, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Paula, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Paula businesses.',
  keywords: 'haha coolers Santa Paula, smart vending Santa Paula California, grab and go cooler Santa Paula, cashless vending Santa Paula',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Paula, California',
    description: 'Revolutionary grab & go vending technology for Santa Paula businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-paula-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-paula-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SantaPaulaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
