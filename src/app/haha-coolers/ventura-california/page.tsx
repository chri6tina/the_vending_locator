import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ventura, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ventura, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ventura businesses.',
  keywords: 'haha coolers Ventura, smart vending Ventura California, grab and go cooler Ventura, cashless vending Ventura',
  openGraph: {
    title: 'Haha Smart Coolers in Ventura, California',
    description: 'Revolutionary grab & go vending technology for Ventura businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ventura-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ventura-california',
  },
};

export default function VenturaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
