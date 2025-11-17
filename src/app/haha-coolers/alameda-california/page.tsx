import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Alameda, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Alameda, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Alameda businesses.',
  keywords: 'haha coolers Alameda, smart vending Alameda California, grab and go cooler Alameda, cashless vending Alameda',
  openGraph: {
    title: 'Haha Smart Coolers in Alameda, California',
    description: 'Revolutionary grab & go vending technology for Alameda businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/alameda-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/alameda-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AlamedaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
