import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Amherst, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Amherst, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Amherst businesses.',
  keywords: 'haha coolers Amherst, smart vending Amherst New York, grab and go cooler Amherst, cashless vending Amherst',
  openGraph: {
    title: 'Haha Smart Coolers in Amherst, New York',
    description: 'Revolutionary grab & go vending technology for Amherst businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/amherst-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/amherst-new-york',
  },
};

export default function AmherstNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
