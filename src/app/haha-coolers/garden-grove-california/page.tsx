import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Garden Grove, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Garden Grove, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Garden Grove businesses.',
  keywords: 'haha coolers Garden Grove, smart vending Garden Grove California, grab and go cooler Garden Grove, cashless vending Garden Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Garden Grove, California',
    description: 'Revolutionary grab & go vending technology for Garden Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/garden-grove-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/garden-grove-california',
  },
};

export default function GardenGroveCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
