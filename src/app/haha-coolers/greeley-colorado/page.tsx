import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greeley, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greeley, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greeley businesses.',
  keywords: 'haha coolers Greeley, smart vending Greeley Colorado, grab and go cooler Greeley, cashless vending Greeley',
  openGraph: {
    title: 'Haha Smart Coolers in Greeley, Colorado',
    description: 'Revolutionary grab & go vending technology for Greeley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greeley-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greeley-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GreeleyColoradoCoolerPageMetadata() {
  return <PageClient />;
}
