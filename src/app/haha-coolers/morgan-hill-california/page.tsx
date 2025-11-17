import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Morgan Hill, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Morgan Hill, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Morgan Hill businesses.',
  keywords: 'haha coolers Morgan Hill, smart vending Morgan Hill California, grab and go cooler Morgan Hill, cashless vending Morgan Hill',
  openGraph: {
    title: 'Haha Smart Coolers in Morgan Hill, California',
    description: 'Revolutionary grab & go vending technology for Morgan Hill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/morgan-hill-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/morgan-hill-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MorganHillCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
