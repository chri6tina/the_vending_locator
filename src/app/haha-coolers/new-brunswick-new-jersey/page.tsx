import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Brunswick, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Brunswick, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Brunswick businesses.',
  keywords: 'haha coolers New Brunswick, smart vending New Brunswick New Jersey, grab and go cooler New Brunswick, cashless vending New Brunswick',
  openGraph: {
    title: 'Haha Smart Coolers in New Brunswick, New Jersey',
    description: 'Revolutionary grab & go vending technology for New Brunswick businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-brunswick-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-brunswick-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewBrunswickNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
