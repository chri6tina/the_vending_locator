import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Elsmere, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Elsmere, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Elsmere businesses.',
  keywords: 'haha coolers Elsmere, smart vending Elsmere Delaware, grab and go cooler Elsmere, cashless vending Elsmere',
  openGraph: {
    title: 'Haha Smart Coolers in Elsmere, Delaware',
    description: 'Revolutionary grab & go vending technology for Elsmere businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/elsmere-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/elsmere-delaware',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElsmereDelawareCoolerPageMetadata() {
  return <PageClient />;
}
