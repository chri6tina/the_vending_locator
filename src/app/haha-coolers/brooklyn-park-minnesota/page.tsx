import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brooklyn Park, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brooklyn Park, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brooklyn Park businesses.',
  keywords: 'haha coolers Brooklyn Park, smart vending Brooklyn Park Minnesota, grab and go cooler Brooklyn Park, cashless vending Brooklyn Park',
  openGraph: {
    title: 'Haha Smart Coolers in Brooklyn Park, Minnesota',
    description: 'Revolutionary grab & go vending technology for Brooklyn Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brooklyn-park-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brooklyn-park-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrooklynParkMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
