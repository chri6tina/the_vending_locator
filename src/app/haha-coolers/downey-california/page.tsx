import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Downey, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Downey, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Downey businesses.',
  keywords: 'haha coolers Downey, smart vending Downey California, grab and go cooler Downey, cashless vending Downey',
  openGraph: {
    title: 'Haha Smart Coolers in Downey, California',
    description: 'Revolutionary grab & go vending technology for Downey businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/downey-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/downey-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DowneyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
