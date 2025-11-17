import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South San Francisco, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South San Francisco, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South San Francisco businesses.',
  keywords: 'haha coolers South San Francisco, smart vending South San Francisco California, grab and go cooler South San Francisco, cashless vending South San Francisco',
  openGraph: {
    title: 'Haha Smart Coolers in South San Francisco, California',
    description: 'Revolutionary grab & go vending technology for South San Francisco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-san-francisco-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-san-francisco-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SouthSanFranciscoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
