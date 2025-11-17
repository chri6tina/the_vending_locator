import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Shoreline, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Shoreline, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Shoreline businesses.',
  keywords: 'haha coolers Shoreline, smart vending Shoreline Washington, grab and go cooler Shoreline, cashless vending Shoreline',
  openGraph: {
    title: 'Haha Smart Coolers in Shoreline, Washington',
    description: 'Revolutionary grab & go vending technology for Shoreline businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/shoreline-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/shoreline-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ShorelineWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
