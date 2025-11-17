import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lake Charles, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lake Charles, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lake Charles businesses.',
  keywords: 'haha coolers Lake Charles, smart vending Lake Charles Louisiana, grab and go cooler Lake Charles, cashless vending Lake Charles',
  openGraph: {
    title: 'Haha Smart Coolers in Lake Charles, Louisiana',
    description: 'Revolutionary grab & go vending technology for Lake Charles businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lake-charles-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lake-charles-louisiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LakeCharlesLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
