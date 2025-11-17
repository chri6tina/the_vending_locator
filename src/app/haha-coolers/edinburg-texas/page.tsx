import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Edinburg, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Edinburg, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Edinburg businesses.',
  keywords: 'haha coolers Edinburg, smart vending Edinburg Texas, grab and go cooler Edinburg, cashless vending Edinburg',
  openGraph: {
    title: 'Haha Smart Coolers in Edinburg, Texas',
    description: 'Revolutionary grab & go vending technology for Edinburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/edinburg-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/edinburg-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EdinburgTexasCoolerPageMetadata() {
  return <PageClient />;
}
