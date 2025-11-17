import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Florence, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Florence, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Florence businesses.',
  keywords: 'haha coolers Florence, smart vending Florence South Carolina, grab and go cooler Florence, cashless vending Florence',
  openGraph: {
    title: 'Haha Smart Coolers in Florence, South Carolina',
    description: 'Revolutionary grab & go vending technology for Florence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/florence-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/florence-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FlorenceSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
