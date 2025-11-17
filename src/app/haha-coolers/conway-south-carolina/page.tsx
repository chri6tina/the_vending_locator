import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Conway, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Conway, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Conway businesses.',
  keywords: 'haha coolers Conway, smart vending Conway South Carolina, grab and go cooler Conway, cashless vending Conway',
  openGraph: {
    title: 'Haha Smart Coolers in Conway, South Carolina',
    description: 'Revolutionary grab & go vending technology for Conway businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/conway-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/conway-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ConwaySouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
