import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Daly City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Daly City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Daly City businesses.',
  keywords: 'haha coolers Daly City, smart vending Daly City California, grab and go cooler Daly City, cashless vending Daly City',
  openGraph: {
    title: 'Haha Smart Coolers in Daly City, California',
    description: 'Revolutionary grab & go vending technology for Daly City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/daly-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/daly-city-california',
  },
};

export default function DalyCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
