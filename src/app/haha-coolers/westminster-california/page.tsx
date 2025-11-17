import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Westminster, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Westminster, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Westminster businesses.',
  keywords: 'haha coolers Westminster, smart vending Westminster California, grab and go cooler Westminster, cashless vending Westminster',
  openGraph: {
    title: 'Haha Smart Coolers in Westminster, California',
    description: 'Revolutionary grab & go vending technology for Westminster businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/westminster-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/westminster-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WestminsterCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
