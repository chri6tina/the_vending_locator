import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wyoming, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wyoming, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wyoming businesses.',
  keywords: 'haha coolers Wyoming, smart vending Wyoming Michigan, grab and go cooler Wyoming, cashless vending Wyoming',
  openGraph: {
    title: 'Haha Smart Coolers in Wyoming, Michigan',
    description: 'Revolutionary grab & go vending technology for Wyoming businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wyoming-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wyoming-michigan',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WyomingMichiganCoolerPageMetadata() {
  return <PageClient />;
}
