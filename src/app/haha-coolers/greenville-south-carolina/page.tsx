import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greenville, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greenville, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greenville businesses.',
  keywords: 'haha coolers Greenville, smart vending Greenville South Carolina, grab and go cooler Greenville, cashless vending Greenville',
  openGraph: {
    title: 'Haha Smart Coolers in Greenville, South Carolina',
    description: 'Revolutionary grab & go vending technology for Greenville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greenville-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greenville-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GreenvilleSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
