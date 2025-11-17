import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hamden, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hamden, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hamden businesses.',
  keywords: 'haha coolers Hamden, smart vending Hamden Connecticut, grab and go cooler Hamden, cashless vending Hamden',
  openGraph: {
    title: 'Haha Smart Coolers in Hamden, Connecticut',
    description: 'Revolutionary grab & go vending technology for Hamden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hamden-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hamden-connecticut',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HamdenConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
