import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Springs, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Springs, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Springs businesses.',
  keywords: 'haha coolers Palm Springs, smart vending Palm Springs California, grab and go cooler Palm Springs, cashless vending Palm Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Springs, California',
    description: 'Revolutionary grab & go vending technology for Palm Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-springs-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-springs-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PalmSpringsCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
