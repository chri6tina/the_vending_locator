import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Watertown, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Watertown, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Watertown businesses.',
  keywords: 'haha coolers Watertown, smart vending Watertown South Dakota, grab and go cooler Watertown, cashless vending Watertown',
  openGraph: {
    title: 'Haha Smart Coolers in Watertown, South Dakota',
    description: 'Revolutionary grab & go vending technology for Watertown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/watertown-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/watertown-south-dakota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WatertownSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
