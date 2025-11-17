import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Redwood City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Redwood City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Redwood City businesses.',
  keywords: 'haha coolers Redwood City, smart vending Redwood City California, grab and go cooler Redwood City, cashless vending Redwood City',
  openGraph: {
    title: 'Haha Smart Coolers in Redwood City, California',
    description: 'Revolutionary grab & go vending technology for Redwood City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/redwood-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/redwood-city-california',
  },
};

export default function RedwoodCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
