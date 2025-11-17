import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Leandro, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Leandro, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Leandro businesses.',
  keywords: 'haha coolers San Leandro, smart vending San Leandro California, grab and go cooler San Leandro, cashless vending San Leandro',
  openGraph: {
    title: 'Haha Smart Coolers in San Leandro, California',
    description: 'Revolutionary grab & go vending technology for San Leandro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-leandro-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-leandro-california',
  },
};

export default function SanLeandroCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
