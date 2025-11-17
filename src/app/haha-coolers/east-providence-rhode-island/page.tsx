import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in East Providence, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in East Providence, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for East Providence businesses.',
  keywords: 'haha coolers East Providence, smart vending East Providence Rhode Island, grab and go cooler East Providence, cashless vending East Providence',
  openGraph: {
    title: 'Haha Smart Coolers in East Providence, Rhode Island',
    description: 'Revolutionary grab & go vending technology for East Providence businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/east-providence-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/east-providence-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function EastProvidenceRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
