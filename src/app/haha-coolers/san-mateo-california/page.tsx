import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Mateo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Mateo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Mateo businesses.',
  keywords: 'haha coolers San Mateo, smart vending San Mateo California, grab and go cooler San Mateo, cashless vending San Mateo',
  openGraph: {
    title: 'Haha Smart Coolers in San Mateo, California',
    description: 'Revolutionary grab & go vending technology for San Mateo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-mateo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-mateo-california',
  },
};

export default function SanMateoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
