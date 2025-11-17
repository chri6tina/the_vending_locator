import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sebastian, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sebastian, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sebastian businesses.',
  keywords: 'haha coolers Sebastian, smart vending Sebastian Florida, grab and go cooler Sebastian, cashless vending Sebastian',
  openGraph: {
    title: 'Haha Smart Coolers in Sebastian, Florida',
    description: 'Revolutionary grab & go vending technology for Sebastian businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sebastian-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sebastian-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SebastianFloridaCoolerPageMetadata() {
  return <PageClient />;
}
