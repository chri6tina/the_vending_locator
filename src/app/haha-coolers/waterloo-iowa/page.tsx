import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waterloo, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waterloo, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waterloo businesses.',
  keywords: 'haha coolers Waterloo, smart vending Waterloo Iowa, grab and go cooler Waterloo, cashless vending Waterloo',
  openGraph: {
    title: 'Haha Smart Coolers in Waterloo, Iowa',
    description: 'Revolutionary grab & go vending technology for Waterloo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waterloo-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waterloo-iowa',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WaterlooIowaCoolerPageMetadata() {
  return <PageClient />;
}
