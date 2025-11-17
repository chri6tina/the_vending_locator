import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Stockton, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Stockton, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Stockton businesses.',
  keywords: 'haha coolers Stockton, smart vending Stockton California, grab and go cooler Stockton, cashless vending Stockton',
  openGraph: {
    title: 'Haha Smart Coolers in Stockton, California',
    description: 'Revolutionary grab & go vending technology for Stockton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/stockton-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/stockton-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StocktonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
