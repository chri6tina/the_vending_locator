import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elk Grove, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elk Grove, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elk Grove businesses.',
  keywords: 'haha coolers Elk Grove, smart vending Elk Grove California, grab and go cooler Elk Grove, cashless vending Elk Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Elk Grove, California',
    description: 'Revolutionary grab & go vending technology for Elk Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elk-grove-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elk-grove-california',
  },
};

export default function ElkGroveCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
