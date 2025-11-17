import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Newark, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Newark, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Newark businesses.',
  keywords: 'haha coolers Newark, smart vending Newark California, grab and go cooler Newark, cashless vending Newark',
  openGraph: {
    title: 'Haha Smart Coolers in Newark, California',
    description: 'Revolutionary grab & go vending technology for Newark businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/newark-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/newark-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewarkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
