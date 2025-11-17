import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laguna Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laguna Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laguna Beach businesses.',
  keywords: 'haha coolers Laguna Beach, smart vending Laguna Beach California, grab and go cooler Laguna Beach, cashless vending Laguna Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Laguna Beach, California',
    description: 'Revolutionary grab & go vending technology for Laguna Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laguna-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laguna-beach-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LagunaBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
