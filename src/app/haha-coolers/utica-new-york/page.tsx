import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Utica, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Utica, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Utica businesses.',
  keywords: 'haha coolers Utica, smart vending Utica New York, grab and go cooler Utica, cashless vending Utica',
  openGraph: {
    title: 'Haha Smart Coolers in Utica, New York',
    description: 'Revolutionary grab & go vending technology for Utica businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/utica-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/utica-new-york',
  },
};

export default function UticaNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
