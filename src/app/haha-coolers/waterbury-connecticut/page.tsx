import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waterbury, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waterbury, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waterbury businesses.',
  keywords: 'haha coolers Waterbury, smart vending Waterbury Connecticut, grab and go cooler Waterbury, cashless vending Waterbury',
  openGraph: {
    title: 'Haha Smart Coolers in Waterbury, Connecticut',
    description: 'Revolutionary grab & go vending technology for Waterbury businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waterbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waterbury-connecticut',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WaterburyConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
