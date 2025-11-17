import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bell Gardens, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bell Gardens, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bell Gardens businesses.',
  keywords: 'haha coolers Bell Gardens, smart vending Bell Gardens California, grab and go cooler Bell Gardens, cashless vending Bell Gardens',
  openGraph: {
    title: 'Haha Smart Coolers in Bell Gardens, California',
    description: 'Revolutionary grab & go vending technology for Bell Gardens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bell-gardens-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bell-gardens-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BellGardensCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
