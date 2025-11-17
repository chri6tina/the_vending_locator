import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oceanside, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oceanside, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oceanside businesses.',
  keywords: 'haha coolers Oceanside, smart vending Oceanside California, grab and go cooler Oceanside, cashless vending Oceanside',
  openGraph: {
    title: 'Haha Smart Coolers in Oceanside, California',
    description: 'Revolutionary grab & go vending technology for Oceanside businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oceanside-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oceanside-california',
  },
};

export default function OceansideCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
