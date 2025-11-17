import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Keizer, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Keizer, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Keizer businesses.',
  keywords: 'haha coolers Keizer, smart vending Keizer Oregon, grab and go cooler Keizer, cashless vending Keizer',
  openGraph: {
    title: 'Haha Smart Coolers in Keizer, Oregon',
    description: 'Revolutionary grab & go vending technology for Keizer businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/keizer-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/keizer-oregon',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KeizerOregonCoolerPageMetadata() {
  return <PageClient />;
}
