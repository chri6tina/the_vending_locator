import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Long Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Long Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Long Beach businesses.',
  keywords: 'haha coolers Long Beach, smart vending Long Beach California, grab and go cooler Long Beach, cashless vending Long Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Long Beach, California',
    description: 'Revolutionary grab & go vending technology for Long Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/long-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/long-beach-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LongBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
