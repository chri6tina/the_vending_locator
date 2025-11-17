import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Encinitas, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Encinitas, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Encinitas businesses.',
  keywords: 'haha coolers Encinitas, smart vending Encinitas California, grab and go cooler Encinitas, cashless vending Encinitas',
  openGraph: {
    title: 'Haha Smart Coolers in Encinitas, California',
    description: 'Revolutionary grab & go vending technology for Encinitas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/encinitas-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/encinitas-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function EncinitasCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
