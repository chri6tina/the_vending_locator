import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in North Charleston, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in North Charleston, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for North Charleston businesses.',
  keywords: 'haha coolers North Charleston, smart vending North Charleston South Carolina, grab and go cooler North Charleston, cashless vending North Charleston',
  openGraph: {
    title: 'Haha Smart Coolers in North Charleston, South Carolina',
    description: 'Revolutionary grab & go vending technology for North Charleston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/north-charleston-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/north-charleston-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorthCharlestonSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
