import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cary, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cary, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cary businesses.',
  keywords: 'haha coolers Cary, smart vending Cary North Carolina, grab and go cooler Cary, cashless vending Cary',
  openGraph: {
    title: 'Haha Smart Coolers in Cary, North Carolina',
    description: 'Revolutionary grab & go vending technology for Cary businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cary-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cary-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CaryNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
