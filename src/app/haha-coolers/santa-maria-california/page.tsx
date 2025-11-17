import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Maria, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Maria, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Maria businesses.',
  keywords: 'haha coolers Santa Maria, smart vending Santa Maria California, grab and go cooler Santa Maria, cashless vending Santa Maria',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Maria, California',
    description: 'Revolutionary grab & go vending technology for Santa Maria businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-maria-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-maria-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SantaMariaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
