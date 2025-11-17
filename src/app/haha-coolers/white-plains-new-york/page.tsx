import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in White Plains, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in White Plains, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for White Plains businesses.',
  keywords: 'haha coolers White Plains, smart vending White Plains New York, grab and go cooler White Plains, cashless vending White Plains',
  openGraph: {
    title: 'Haha Smart Coolers in White Plains, New York',
    description: 'Revolutionary grab & go vending technology for White Plains businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/white-plains-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/white-plains-new-york',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WhitePlainsNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
