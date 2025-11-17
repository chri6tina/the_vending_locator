import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bend, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bend, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bend businesses.',
  keywords: 'haha coolers Bend, smart vending Bend Oregon, grab and go cooler Bend, cashless vending Bend',
  openGraph: {
    title: 'Haha Smart Coolers in Bend, Oregon',
    description: 'Revolutionary grab & go vending technology for Bend businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bend-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bend-oregon',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BendOregonCoolerPageMetadata() {
  return <PageClient />;
}
