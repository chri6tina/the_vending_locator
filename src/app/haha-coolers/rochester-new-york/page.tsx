import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rochester, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rochester, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rochester businesses.',
  keywords: 'haha coolers Rochester, smart vending Rochester New York, grab and go cooler Rochester, cashless vending Rochester',
  openGraph: {
    title: 'Haha Smart Coolers in Rochester, New York',
    description: 'Revolutionary grab & go vending technology for Rochester businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rochester-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rochester-new-york',
  },
};

export default function RochesterNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
