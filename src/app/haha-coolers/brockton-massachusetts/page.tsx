import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brockton, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brockton, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brockton businesses.',
  keywords: 'haha coolers Brockton, smart vending Brockton Massachusetts, grab and go cooler Brockton, cashless vending Brockton',
  openGraph: {
    title: 'Haha Smart Coolers in Brockton, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Brockton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brockton-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brockton-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrocktonMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
