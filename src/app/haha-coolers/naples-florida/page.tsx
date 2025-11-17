import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Naples, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Naples, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Naples businesses.',
  keywords: 'haha coolers Naples, smart vending Naples Florida, grab and go cooler Naples, cashless vending Naples',
  openGraph: {
    title: 'Haha Smart Coolers in Naples, Florida',
    description: 'Revolutionary grab & go vending technology for Naples businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/naples-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/naples-florida',
  },
};

export default function NaplesFloridaCoolerPageMetadata() {
  return <PageClient />;
}
