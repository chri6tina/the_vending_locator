import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Turlock, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Turlock, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Turlock businesses.',
  keywords: 'haha coolers Turlock, smart vending Turlock California, grab and go cooler Turlock, cashless vending Turlock',
  openGraph: {
    title: 'Haha Smart Coolers in Turlock, California',
    description: 'Revolutionary grab & go vending technology for Turlock businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/turlock-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/turlock-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TurlockCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
