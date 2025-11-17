import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dover, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dover, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dover businesses.',
  keywords: 'haha coolers Dover, smart vending Dover Delaware, grab and go cooler Dover, cashless vending Dover',
  openGraph: {
    title: 'Haha Smart Coolers in Dover, Delaware',
    description: 'Revolutionary grab & go vending technology for Dover businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dover-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dover-delaware',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DoverDelawareCoolerPageMetadata() {
  return <PageClient />;
}
