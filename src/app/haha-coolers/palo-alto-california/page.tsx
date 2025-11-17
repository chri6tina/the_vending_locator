import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palo Alto, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palo Alto, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palo Alto businesses.',
  keywords: 'haha coolers Palo Alto, smart vending Palo Alto California, grab and go cooler Palo Alto, cashless vending Palo Alto',
  openGraph: {
    title: 'Haha Smart Coolers in Palo Alto, California',
    description: 'Revolutionary grab & go vending technology for Palo Alto businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palo-alto-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palo-alto-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PaloAltoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
