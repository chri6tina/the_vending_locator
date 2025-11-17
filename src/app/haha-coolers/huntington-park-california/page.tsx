import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Huntington Park, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Huntington Park, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Huntington Park businesses.',
  keywords: 'haha coolers Huntington Park, smart vending Huntington Park California, grab and go cooler Huntington Park, cashless vending Huntington Park',
  openGraph: {
    title: 'Haha Smart Coolers in Huntington Park, California',
    description: 'Revolutionary grab & go vending technology for Huntington Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/huntington-park-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/huntington-park-california',
  },
};

export default function HuntingtonParkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
