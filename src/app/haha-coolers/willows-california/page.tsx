import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Willows, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Willows, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Willows businesses.',
  keywords: 'haha coolers Willows, smart vending Willows California, grab and go cooler Willows, cashless vending Willows',
  openGraph: {
    title: 'Haha Smart Coolers in Willows, California',
    description: 'Revolutionary grab & go vending technology for Willows businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/willows-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/willows-california',
  },
};

export default function WillowsCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
