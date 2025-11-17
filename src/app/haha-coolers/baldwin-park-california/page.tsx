import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Baldwin Park, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Baldwin Park, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Baldwin Park businesses.',
  keywords: 'haha coolers Baldwin Park, smart vending Baldwin Park California, grab and go cooler Baldwin Park, cashless vending Baldwin Park',
  openGraph: {
    title: 'Haha Smart Coolers in Baldwin Park, California',
    description: 'Revolutionary grab & go vending technology for Baldwin Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/baldwin-park-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/baldwin-park-california',
  },
};

export default function BaldwinParkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
