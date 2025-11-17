import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bloomington, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bloomington, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bloomington businesses.',
  keywords: 'haha coolers Bloomington, smart vending Bloomington Indiana, grab and go cooler Bloomington, cashless vending Bloomington',
  openGraph: {
    title: 'Haha Smart Coolers in Bloomington, Indiana',
    description: 'Revolutionary grab & go vending technology for Bloomington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bloomington-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bloomington-indiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BloomingtonIndianaCoolerPageMetadata() {
  return <PageClient />;
}
