import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Redondo Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Redondo Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Redondo Beach businesses.',
  keywords: 'haha coolers Redondo Beach, smart vending Redondo Beach California, grab and go cooler Redondo Beach, cashless vending Redondo Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Redondo Beach, California',
    description: 'Revolutionary grab & go vending technology for Redondo Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/redondo-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/redondo-beach-california',
  },
};

export default function RedondoBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
