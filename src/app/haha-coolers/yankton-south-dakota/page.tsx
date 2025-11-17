import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yankton, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yankton, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yankton businesses.',
  keywords: 'haha coolers Yankton, smart vending Yankton South Dakota, grab and go cooler Yankton, cashless vending Yankton',
  openGraph: {
    title: 'Haha Smart Coolers in Yankton, South Dakota',
    description: 'Revolutionary grab & go vending technology for Yankton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yankton-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yankton-south-dakota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function YanktonSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
