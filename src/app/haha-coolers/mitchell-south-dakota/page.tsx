import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mitchell, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mitchell, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mitchell businesses.',
  keywords: 'haha coolers Mitchell, smart vending Mitchell South Dakota, grab and go cooler Mitchell, cashless vending Mitchell',
  openGraph: {
    title: 'Haha Smart Coolers in Mitchell, South Dakota',
    description: 'Revolutionary grab & go vending technology for Mitchell businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mitchell-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mitchell-south-dakota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MitchellSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
