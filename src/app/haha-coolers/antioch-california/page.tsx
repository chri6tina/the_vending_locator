import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Antioch, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Antioch, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Antioch businesses.',
  keywords: 'haha coolers Antioch, smart vending Antioch California, grab and go cooler Antioch, cashless vending Antioch',
  openGraph: {
    title: 'Haha Smart Coolers in Antioch, California',
    description: 'Revolutionary grab & go vending technology for Antioch businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/antioch-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/antioch-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AntiochCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
