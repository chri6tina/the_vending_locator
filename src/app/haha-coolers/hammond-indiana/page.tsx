import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hammond, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hammond, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hammond businesses.',
  keywords: 'haha coolers Hammond, smart vending Hammond Indiana, grab and go cooler Hammond, cashless vending Hammond',
  openGraph: {
    title: 'Haha Smart Coolers in Hammond, Indiana',
    description: 'Revolutionary grab & go vending technology for Hammond businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hammond-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hammond-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HammondIndianaCoolerPageMetadata() {
  return <PageClient />;
}
