import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Rosa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Rosa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Rosa businesses.',
  keywords: 'haha coolers Santa Rosa, smart vending Santa Rosa California, grab and go cooler Santa Rosa, cashless vending Santa Rosa',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Rosa, California',
    description: 'Revolutionary grab & go vending technology for Santa Rosa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-rosa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-rosa-california',
  },
};

export default function SantaRosaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
