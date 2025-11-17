import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waldorf, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waldorf, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waldorf businesses.',
  keywords: 'haha coolers Waldorf, smart vending Waldorf Maryland, grab and go cooler Waldorf, cashless vending Waldorf',
  openGraph: {
    title: 'Haha Smart Coolers in Waldorf, Maryland',
    description: 'Revolutionary grab & go vending technology for Waldorf businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waldorf-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waldorf-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WaldorfMarylandCoolerPageMetadata() {
  return <PageClient />;
}
