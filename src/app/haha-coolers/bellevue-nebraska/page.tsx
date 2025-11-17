import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bellevue, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bellevue, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bellevue businesses.',
  keywords: 'haha coolers Bellevue, smart vending Bellevue Nebraska, grab and go cooler Bellevue, cashless vending Bellevue',
  openGraph: {
    title: 'Haha Smart Coolers in Bellevue, Nebraska',
    description: 'Revolutionary grab & go vending technology for Bellevue businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bellevue-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bellevue-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BellevueNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
