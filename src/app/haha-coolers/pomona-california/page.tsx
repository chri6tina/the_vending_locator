import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pomona, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pomona, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pomona businesses.',
  keywords: 'haha coolers Pomona, smart vending Pomona California, grab and go cooler Pomona, cashless vending Pomona',
  openGraph: {
    title: 'Haha Smart Coolers in Pomona, California',
    description: 'Revolutionary grab & go vending technology for Pomona businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pomona-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pomona-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PomonaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
