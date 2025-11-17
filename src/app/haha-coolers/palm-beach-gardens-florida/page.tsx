import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Beach Gardens, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Beach Gardens, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Beach Gardens businesses.',
  keywords: 'haha coolers Palm Beach Gardens, smart vending Palm Beach Gardens Florida, grab and go cooler Palm Beach Gardens, cashless vending Palm Beach Gardens',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Beach Gardens, Florida',
    description: 'Revolutionary grab & go vending technology for Palm Beach Gardens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-beach-gardens-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-beach-gardens-florida',
  },
};

export default function PalmBeachGardensFloridaCoolerPageMetadata() {
  return <PageClient />;
}
