import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Evansville, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Evansville, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Evansville businesses.',
  keywords: 'haha coolers Evansville, smart vending Evansville Indiana, grab and go cooler Evansville, cashless vending Evansville',
  openGraph: {
    title: 'Haha Smart Coolers in Evansville, Indiana',
    description: 'Revolutionary grab & go vending technology for Evansville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/evansville-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/evansville-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EvansvilleIndianaCoolerPageMetadata() {
  return <PageClient />;
}
