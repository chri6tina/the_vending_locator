import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gainesville, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gainesville, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gainesville businesses.',
  keywords: 'haha coolers Gainesville, smart vending Gainesville Florida, grab and go cooler Gainesville, cashless vending Gainesville',
  openGraph: {
    title: 'Haha Smart Coolers in Gainesville, Florida',
    description: 'Revolutionary grab & go vending technology for Gainesville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gainesville-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gainesville-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GainesvilleFloridaCoolerPageMetadata() {
  return <PageClient />;
}
