import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Millbrae, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Millbrae, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Millbrae businesses.',
  keywords: 'haha coolers Millbrae, smart vending Millbrae California, grab and go cooler Millbrae, cashless vending Millbrae',
  openGraph: {
    title: 'Haha Smart Coolers in Millbrae, California',
    description: 'Revolutionary grab & go vending technology for Millbrae businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/millbrae-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/millbrae-california',
  },
};

export default function MillbraeCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
