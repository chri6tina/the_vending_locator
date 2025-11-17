import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lakewood, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lakewood, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lakewood businesses.',
  keywords: 'haha coolers Lakewood, smart vending Lakewood California, grab and go cooler Lakewood, cashless vending Lakewood',
  openGraph: {
    title: 'Haha Smart Coolers in Lakewood, California',
    description: 'Revolutionary grab & go vending technology for Lakewood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lakewood-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lakewood-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LakewoodCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
