import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wasco, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wasco, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wasco businesses.',
  keywords: 'haha coolers Wasco, smart vending Wasco California, grab and go cooler Wasco, cashless vending Wasco',
  openGraph: {
    title: 'Haha Smart Coolers in Wasco, California',
    description: 'Revolutionary grab & go vending technology for Wasco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wasco-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wasco-california',
  },
};

export default function WascoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
