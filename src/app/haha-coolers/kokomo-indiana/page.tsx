import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kokomo, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kokomo, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kokomo businesses.',
  keywords: 'haha coolers Kokomo, smart vending Kokomo Indiana, grab and go cooler Kokomo, cashless vending Kokomo',
  openGraph: {
    title: 'Haha Smart Coolers in Kokomo, Indiana',
    description: 'Revolutionary grab & go vending technology for Kokomo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kokomo-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kokomo-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KokomoIndianaCoolerPageMetadata() {
  return <PageClient />;
}
