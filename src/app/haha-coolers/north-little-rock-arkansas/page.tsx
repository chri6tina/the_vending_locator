import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in North Little Rock, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in North Little Rock, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for North Little Rock businesses.',
  keywords: 'haha coolers North Little Rock, smart vending North Little Rock Arkansas, grab and go cooler North Little Rock, cashless vending North Little Rock',
  openGraph: {
    title: 'Haha Smart Coolers in North Little Rock, Arkansas',
    description: 'Revolutionary grab & go vending technology for North Little Rock businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/north-little-rock-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/north-little-rock-arkansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorthLittleRockArkansasCoolerPageMetadata() {
  return <PageClient />;
}
