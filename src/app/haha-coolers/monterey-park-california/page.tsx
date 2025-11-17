import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Monterey Park, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Monterey Park, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Monterey Park businesses.',
  keywords: 'haha coolers Monterey Park, smart vending Monterey Park California, grab and go cooler Monterey Park, cashless vending Monterey Park',
  openGraph: {
    title: 'Haha Smart Coolers in Monterey Park, California',
    description: 'Revolutionary grab & go vending technology for Monterey Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/monterey-park-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/monterey-park-california',
  },
};

export default function MontereyParkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
