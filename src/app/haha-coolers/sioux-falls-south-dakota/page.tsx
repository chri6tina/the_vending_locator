import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sioux Falls, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sioux Falls, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sioux Falls businesses.',
  keywords: 'haha coolers Sioux Falls, smart vending Sioux Falls South Dakota, grab and go cooler Sioux Falls, cashless vending Sioux Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Sioux Falls, South Dakota',
    description: 'Revolutionary grab & go vending technology for Sioux Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sioux-falls-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sioux-falls-south-dakota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SiouxFallsSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
