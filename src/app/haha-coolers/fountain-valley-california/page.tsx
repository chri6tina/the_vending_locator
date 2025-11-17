import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fountain Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fountain Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fountain Valley businesses.',
  keywords: 'haha coolers Fountain Valley, smart vending Fountain Valley California, grab and go cooler Fountain Valley, cashless vending Fountain Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Fountain Valley, California',
    description: 'Revolutionary grab & go vending technology for Fountain Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fountain-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fountain-valley-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FountainValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
