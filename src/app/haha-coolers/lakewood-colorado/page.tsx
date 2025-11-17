import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lakewood, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lakewood, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lakewood businesses.',
  keywords: 'haha coolers Lakewood, smart vending Lakewood Colorado, grab and go cooler Lakewood, cashless vending Lakewood',
  openGraph: {
    title: 'Haha Smart Coolers in Lakewood, Colorado',
    description: 'Revolutionary grab & go vending technology for Lakewood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lakewood-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lakewood-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LakewoodColoradoCoolerPageMetadata() {
  return <PageClient />;
}
