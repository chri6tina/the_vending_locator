import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Atascadero, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Atascadero, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Atascadero businesses.',
  keywords: 'haha coolers Atascadero, smart vending Atascadero California, grab and go cooler Atascadero, cashless vending Atascadero',
  openGraph: {
    title: 'Haha Smart Coolers in Atascadero, California',
    description: 'Revolutionary grab & go vending technology for Atascadero businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/atascadero-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/atascadero-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AtascaderoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
