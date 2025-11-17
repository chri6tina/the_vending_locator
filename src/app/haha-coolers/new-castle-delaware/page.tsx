import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Castle, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Castle, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Castle businesses.',
  keywords: 'haha coolers New Castle, smart vending New Castle Delaware, grab and go cooler New Castle, cashless vending New Castle',
  openGraph: {
    title: 'Haha Smart Coolers in New Castle, Delaware',
    description: 'Revolutionary grab & go vending technology for New Castle businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-castle-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-castle-delaware',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NewCastleDelawareCoolerPageMetadata() {
  return <PageClient />;
}
