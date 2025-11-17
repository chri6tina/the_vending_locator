import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laguna Hills, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laguna Hills, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laguna Hills businesses.',
  keywords: 'haha coolers Laguna Hills, smart vending Laguna Hills California, grab and go cooler Laguna Hills, cashless vending Laguna Hills',
  openGraph: {
    title: 'Haha Smart Coolers in Laguna Hills, California',
    description: 'Revolutionary grab & go vending technology for Laguna Hills businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laguna-hills-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laguna-hills-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LagunaHillsCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
