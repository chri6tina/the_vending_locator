import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Asheville, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Asheville, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Asheville businesses.',
  keywords: 'haha coolers Asheville, smart vending Asheville North Carolina, grab and go cooler Asheville, cashless vending Asheville',
  openGraph: {
    title: 'Haha Smart Coolers in Asheville, North Carolina',
    description: 'Revolutionary grab & go vending technology for Asheville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/asheville-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/asheville-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AshevilleNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
