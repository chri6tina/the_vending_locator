import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Martinsburg, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Martinsburg, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Martinsburg businesses.',
  keywords: 'haha coolers Martinsburg, smart vending Martinsburg West Virginia, grab and go cooler Martinsburg, cashless vending Martinsburg',
  openGraph: {
    title: 'Haha Smart Coolers in Martinsburg, West Virginia',
    description: 'Revolutionary grab & go vending technology for Martinsburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/martinsburg-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/martinsburg-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MartinsburgWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
