import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Towson, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Towson, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Towson businesses.',
  keywords: 'haha coolers Towson, smart vending Towson Maryland, grab and go cooler Towson, cashless vending Towson',
  openGraph: {
    title: 'Haha Smart Coolers in Towson, Maryland',
    description: 'Revolutionary grab & go vending technology for Towson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/towson-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/towson-maryland',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TowsonMarylandCoolerPageMetadata() {
  return <PageClient />;
}
