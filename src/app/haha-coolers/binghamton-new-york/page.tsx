import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Binghamton, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Binghamton, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Binghamton businesses.',
  keywords: 'haha coolers Binghamton, smart vending Binghamton New York, grab and go cooler Binghamton, cashless vending Binghamton',
  openGraph: {
    title: 'Haha Smart Coolers in Binghamton, New York',
    description: 'Revolutionary grab & go vending technology for Binghamton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/binghamton-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/binghamton-new-york',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BinghamtonNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
