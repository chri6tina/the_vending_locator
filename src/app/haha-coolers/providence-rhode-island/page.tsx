import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Providence, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Providence, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Providence businesses.',
  keywords: 'haha coolers Providence, smart vending Providence Rhode Island, grab and go cooler Providence, cashless vending Providence',
  openGraph: {
    title: 'Haha Smart Coolers in Providence, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Providence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/providence-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/providence-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ProvidenceRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
