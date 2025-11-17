import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bloomington, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bloomington, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bloomington businesses.',
  keywords: 'haha coolers Bloomington, smart vending Bloomington Minnesota, grab and go cooler Bloomington, cashless vending Bloomington',
  openGraph: {
    title: 'Haha Smart Coolers in Bloomington, Minnesota',
    description: 'Revolutionary grab & go vending technology for Bloomington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bloomington-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bloomington-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BloomingtonMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
