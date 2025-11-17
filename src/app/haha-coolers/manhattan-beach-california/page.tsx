import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Manhattan Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Manhattan Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Manhattan Beach businesses.',
  keywords: 'haha coolers Manhattan Beach, smart vending Manhattan Beach California, grab and go cooler Manhattan Beach, cashless vending Manhattan Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Manhattan Beach, California',
    description: 'Revolutionary grab & go vending technology for Manhattan Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/manhattan-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/manhattan-beach-california',
  },
};

export default function ManhattanBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
