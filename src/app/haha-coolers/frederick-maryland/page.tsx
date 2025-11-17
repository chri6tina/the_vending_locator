import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Frederick, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Frederick, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Frederick businesses.',
  keywords: 'haha coolers Frederick, smart vending Frederick Maryland, grab and go cooler Frederick, cashless vending Frederick',
  openGraph: {
    title: 'Haha Smart Coolers in Frederick, Maryland',
    description: 'Revolutionary grab & go vending technology for Frederick businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/frederick-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/frederick-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FrederickMarylandCoolerPageMetadata() {
  return <PageClient />;
}
