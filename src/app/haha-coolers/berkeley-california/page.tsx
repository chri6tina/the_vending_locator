import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Berkeley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Berkeley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Berkeley businesses.',
  keywords: 'haha coolers Berkeley, smart vending Berkeley California, grab and go cooler Berkeley, cashless vending Berkeley',
  openGraph: {
    title: 'Haha Smart Coolers in Berkeley, California',
    description: 'Revolutionary grab & go vending technology for Berkeley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/berkeley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/berkeley-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BerkeleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
