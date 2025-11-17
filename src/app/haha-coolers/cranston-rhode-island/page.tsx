import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cranston, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cranston, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cranston businesses.',
  keywords: 'haha coolers Cranston, smart vending Cranston Rhode Island, grab and go cooler Cranston, cashless vending Cranston',
  openGraph: {
    title: 'Haha Smart Coolers in Cranston, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Cranston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cranston-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cranston-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CranstonRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
