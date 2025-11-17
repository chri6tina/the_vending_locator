import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Westminster, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Westminster, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Westminster businesses.',
  keywords: 'haha coolers Westminster, smart vending Westminster Colorado, grab and go cooler Westminster, cashless vending Westminster',
  openGraph: {
    title: 'Haha Smart Coolers in Westminster, Colorado',
    description: 'Revolutionary grab & go vending technology for Westminster businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/westminster-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/westminster-colorado',
  },
};

export default function WestminsterColoradoCoolerPageMetadata() {
  return <PageClient />;
}
