import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Federal Way, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Federal Way, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Federal Way businesses.',
  keywords: 'haha coolers Federal Way, smart vending Federal Way Washington, grab and go cooler Federal Way, cashless vending Federal Way',
  openGraph: {
    title: 'Haha Smart Coolers in Federal Way, Washington',
    description: 'Revolutionary grab & go vending technology for Federal Way businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/federal-way-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/federal-way-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FederalWayWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
