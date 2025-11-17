import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Meriden, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Meriden, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Meriden businesses.',
  keywords: 'haha coolers Meriden, smart vending Meriden Connecticut, grab and go cooler Meriden, cashless vending Meriden',
  openGraph: {
    title: 'Haha Smart Coolers in Meriden, Connecticut',
    description: 'Revolutionary grab & go vending technology for Meriden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/meriden-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/meriden-connecticut',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MeridenConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
