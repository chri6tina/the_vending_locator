import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Torrance, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Torrance, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Torrance businesses.',
  keywords: 'haha coolers Torrance, smart vending Torrance California, grab and go cooler Torrance, cashless vending Torrance',
  openGraph: {
    title: 'Haha Smart Coolers in Torrance, California',
    description: 'Revolutionary grab & go vending technology for Torrance businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/torrance-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/torrance-california',
  },
};

export default function TorranceCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
