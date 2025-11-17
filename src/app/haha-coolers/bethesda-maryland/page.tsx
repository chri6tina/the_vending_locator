import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bethesda, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bethesda, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bethesda businesses.',
  keywords: 'haha coolers Bethesda, smart vending Bethesda Maryland, grab and go cooler Bethesda, cashless vending Bethesda',
  openGraph: {
    title: 'Haha Smart Coolers in Bethesda, Maryland',
    description: 'Revolutionary grab & go vending technology for Bethesda businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bethesda-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bethesda-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BethesdaMarylandCoolerPageMetadata() {
  return <PageClient />;
}
