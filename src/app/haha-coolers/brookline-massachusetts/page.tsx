import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brookline, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brookline, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brookline businesses.',
  keywords: 'haha coolers Brookline, smart vending Brookline Massachusetts, grab and go cooler Brookline, cashless vending Brookline',
  openGraph: {
    title: 'Haha Smart Coolers in Brookline, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Brookline businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brookline-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brookline-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BrooklineMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
