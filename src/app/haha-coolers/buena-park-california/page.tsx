import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Buena Park, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Buena Park, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Buena Park businesses.',
  keywords: 'haha coolers Buena Park, smart vending Buena Park California, grab and go cooler Buena Park, cashless vending Buena Park',
  openGraph: {
    title: 'Haha Smart Coolers in Buena Park, California',
    description: 'Revolutionary grab & go vending technology for Buena Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/buena-park-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/buena-park-california',
  },
};

export default function BuenaParkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
