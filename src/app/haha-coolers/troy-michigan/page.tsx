import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Troy, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Troy, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Troy businesses.',
  keywords: 'haha coolers Troy, smart vending Troy Michigan, grab and go cooler Troy, cashless vending Troy',
  openGraph: {
    title: 'Haha Smart Coolers in Troy, Michigan',
    description: 'Revolutionary grab & go vending technology for Troy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/troy-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/troy-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TroyMichiganCoolerPageMetadata() {
  return <PageClient />;
}
