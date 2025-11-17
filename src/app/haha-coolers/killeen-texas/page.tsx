import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Killeen, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Killeen, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Killeen businesses.',
  keywords: 'haha coolers Killeen, smart vending Killeen Texas, grab and go cooler Killeen, cashless vending Killeen',
  openGraph: {
    title: 'Haha Smart Coolers in Killeen, Texas',
    description: 'Revolutionary grab & go vending technology for Killeen businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/killeen-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/killeen-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KilleenTexasCoolerPageMetadata() {
  return <PageClient />;
}
