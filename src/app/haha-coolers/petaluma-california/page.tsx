import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Petaluma, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Petaluma, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Petaluma businesses.',
  keywords: 'haha coolers Petaluma, smart vending Petaluma California, grab and go cooler Petaluma, cashless vending Petaluma',
  openGraph: {
    title: 'Haha Smart Coolers in Petaluma, California',
    description: 'Revolutionary grab & go vending technology for Petaluma businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/petaluma-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/petaluma-california',
  },
};

export default function PetalumaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
