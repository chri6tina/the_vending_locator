import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Royal Palm Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Royal Palm Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Royal Palm Beach businesses.',
  keywords: 'haha coolers Royal Palm Beach, smart vending Royal Palm Beach Florida, grab and go cooler Royal Palm Beach, cashless vending Royal Palm Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Royal Palm Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Royal Palm Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/royal-palm-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/royal-palm-beach-florida',
  },
};

export default function RoyalPalmBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
