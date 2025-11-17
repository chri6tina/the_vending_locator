import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waterville, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waterville, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waterville businesses.',
  keywords: 'haha coolers Waterville, smart vending Waterville Maine, grab and go cooler Waterville, cashless vending Waterville',
  openGraph: {
    title: 'Haha Smart Coolers in Waterville, Maine',
    description: 'Revolutionary grab & go vending technology for Waterville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waterville-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waterville-maine',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WatervilleMaineCoolerPageMetadata() {
  return <PageClient />;
}
