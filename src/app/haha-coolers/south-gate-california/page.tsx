import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South Gate, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South Gate, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South Gate businesses.',
  keywords: 'haha coolers South Gate, smart vending South Gate California, grab and go cooler South Gate, cashless vending South Gate',
  openGraph: {
    title: 'Haha Smart Coolers in South Gate, California',
    description: 'Revolutionary grab & go vending technology for South Gate businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-gate-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-gate-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SouthGateCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
