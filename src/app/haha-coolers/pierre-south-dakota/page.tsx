import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pierre, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pierre, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pierre businesses.',
  keywords: 'haha coolers Pierre, smart vending Pierre South Dakota, grab and go cooler Pierre, cashless vending Pierre',
  openGraph: {
    title: 'Haha Smart Coolers in Pierre, South Dakota',
    description: 'Revolutionary grab & go vending technology for Pierre businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pierre-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pierre-south-dakota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PierreSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
