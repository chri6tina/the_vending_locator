import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Virginia Beach, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Virginia Beach, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Virginia Beach businesses.',
  keywords: 'haha coolers Virginia Beach, smart vending Virginia Beach Virginia, grab and go cooler Virginia Beach, cashless vending Virginia Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Virginia Beach, Virginia',
    description: 'Revolutionary grab & go vending technology for Virginia Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/virginia-beach-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/virginia-beach-virginia',
  },
};

export default function VirginiaBeachVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
