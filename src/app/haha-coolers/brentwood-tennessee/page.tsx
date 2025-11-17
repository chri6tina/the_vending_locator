import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brentwood, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brentwood, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brentwood businesses.',
  keywords: 'haha coolers Brentwood, smart vending Brentwood Tennessee, grab and go cooler Brentwood, cashless vending Brentwood',
  openGraph: {
    title: 'Haha Smart Coolers in Brentwood, Tennessee',
    description: 'Revolutionary grab & go vending technology for Brentwood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brentwood-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brentwood-tennessee',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrentwoodTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
