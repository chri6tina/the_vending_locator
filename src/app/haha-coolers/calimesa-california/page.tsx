import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Calimesa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Calimesa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Calimesa businesses.',
  keywords: 'haha coolers Calimesa, smart vending Calimesa California, grab and go cooler Calimesa, cashless vending Calimesa',
  openGraph: {
    title: 'Haha Smart Coolers in Calimesa, California',
    description: 'Revolutionary grab & go vending technology for Calimesa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/calimesa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/calimesa-california',
  },
};

export default function CalimesaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
