import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Loveland, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Loveland, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Loveland businesses.',
  keywords: 'haha coolers Loveland, smart vending Loveland Colorado, grab and go cooler Loveland, cashless vending Loveland',
  openGraph: {
    title: 'Haha Smart Coolers in Loveland, Colorado',
    description: 'Revolutionary grab & go vending technology for Loveland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/loveland-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/loveland-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LovelandColoradoCoolerPageMetadata() {
  return <PageClient />;
}
