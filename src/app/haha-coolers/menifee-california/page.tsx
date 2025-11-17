import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Menifee, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Menifee, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Menifee businesses.',
  keywords: 'haha coolers Menifee, smart vending Menifee California, grab and go cooler Menifee, cashless vending Menifee',
  openGraph: {
    title: 'Haha Smart Coolers in Menifee, California',
    description: 'Revolutionary grab & go vending technology for Menifee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/menifee-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/menifee-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MenifeeCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
