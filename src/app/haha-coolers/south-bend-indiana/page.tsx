import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South Bend, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South Bend, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South Bend businesses.',
  keywords: 'haha coolers South Bend, smart vending South Bend Indiana, grab and go cooler South Bend, cashless vending South Bend',
  openGraph: {
    title: 'Haha Smart Coolers in South Bend, Indiana',
    description: 'Revolutionary grab & go vending technology for South Bend businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-bend-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-bend-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SouthBendIndianaCoolerPageMetadata() {
  return <PageClient />;
}
