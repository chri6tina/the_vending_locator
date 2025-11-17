import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carson, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carson, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carson businesses.',
  keywords: 'haha coolers Carson, smart vending Carson California, grab and go cooler Carson, cashless vending Carson',
  openGraph: {
    title: 'Haha Smart Coolers in Carson, California',
    description: 'Revolutionary grab & go vending technology for Carson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carson-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carson-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CarsonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
