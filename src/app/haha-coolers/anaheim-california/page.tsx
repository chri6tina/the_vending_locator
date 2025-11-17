import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Anaheim, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Anaheim, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Anaheim businesses.',
  keywords: 'haha coolers Anaheim, smart vending Anaheim California, grab and go cooler Anaheim, cashless vending Anaheim',
  openGraph: {
    title: 'Haha Smart Coolers in Anaheim, California',
    description: 'Revolutionary grab & go vending technology for Anaheim businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/anaheim-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/anaheim-california',
  },
};

export default function AnaheimCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
