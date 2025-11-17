import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oxnard, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oxnard, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oxnard businesses.',
  keywords: 'haha coolers Oxnard, smart vending Oxnard California, grab and go cooler Oxnard, cashless vending Oxnard',
  openGraph: {
    title: 'Haha Smart Coolers in Oxnard, California',
    description: 'Revolutionary grab & go vending technology for Oxnard businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oxnard-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oxnard-california',
  },
};

export default function OxnardCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
