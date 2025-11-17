import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Scottsdale, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Scottsdale, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Scottsdale businesses.',
  keywords: 'haha coolers Scottsdale, smart vending Scottsdale Arizona, grab and go cooler Scottsdale, cashless vending Scottsdale',
  openGraph: {
    title: 'Haha Smart Coolers in Scottsdale, Arizona',
    description: 'Revolutionary grab & go vending technology for Scottsdale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/scottsdale-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/scottsdale-arizona',
  },
};

export default function ScottsdaleArizonaCoolerPageMetadata() {
  return <PageClient />;
}
