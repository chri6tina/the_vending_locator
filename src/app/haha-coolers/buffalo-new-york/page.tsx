import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Buffalo, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Buffalo, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Buffalo businesses.',
  keywords: 'haha coolers Buffalo, smart vending Buffalo New York, grab and go cooler Buffalo, cashless vending Buffalo',
  openGraph: {
    title: 'Haha Smart Coolers in Buffalo, New York',
    description: 'Revolutionary grab & go vending technology for Buffalo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/buffalo-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/buffalo-new-york',
  },
};

export default function BuffaloNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
