import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Columbia, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Columbia, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Columbia businesses.',
  keywords: 'haha coolers Columbia, smart vending Columbia South Carolina, grab and go cooler Columbia, cashless vending Columbia',
  openGraph: {
    title: 'Haha Smart Coolers in Columbia, South Carolina',
    description: 'Revolutionary grab & go vending technology for Columbia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/columbia-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/columbia-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ColumbiaSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
