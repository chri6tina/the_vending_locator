import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Midland, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Midland, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Midland businesses.',
  keywords: 'haha coolers Midland, smart vending Midland Texas, grab and go cooler Midland, cashless vending Midland',
  openGraph: {
    title: 'Haha Smart Coolers in Midland, Texas',
    description: 'Revolutionary grab & go vending technology for Midland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/midland-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/midland-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MidlandTexasCoolerPageMetadata() {
  return <PageClient />;
}
