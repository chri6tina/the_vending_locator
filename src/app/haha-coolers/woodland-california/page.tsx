import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Woodland, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Woodland, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Woodland businesses.',
  keywords: 'haha coolers Woodland, smart vending Woodland California, grab and go cooler Woodland, cashless vending Woodland',
  openGraph: {
    title: 'Haha Smart Coolers in Woodland, California',
    description: 'Revolutionary grab & go vending technology for Woodland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/woodland-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/woodland-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WoodlandCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
