import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lincoln, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lincoln, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lincoln businesses.',
  keywords: 'haha coolers Lincoln, smart vending Lincoln Nebraska, grab and go cooler Lincoln, cashless vending Lincoln',
  openGraph: {
    title: 'Haha Smart Coolers in Lincoln, Nebraska',
    description: 'Revolutionary grab & go vending technology for Lincoln businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lincoln-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lincoln-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LincolnNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
