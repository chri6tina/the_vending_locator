import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carrollton, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carrollton, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carrollton businesses.',
  keywords: 'haha coolers Carrollton, smart vending Carrollton Texas, grab and go cooler Carrollton, cashless vending Carrollton',
  openGraph: {
    title: 'Haha Smart Coolers in Carrollton, Texas',
    description: 'Revolutionary grab & go vending technology for Carrollton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carrollton-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carrollton-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CarrolltonTexasCoolerPageMetadata() {
  return <PageClient />;
}
