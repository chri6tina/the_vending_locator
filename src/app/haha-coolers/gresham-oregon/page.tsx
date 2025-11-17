import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gresham, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gresham, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gresham businesses.',
  keywords: 'haha coolers Gresham, smart vending Gresham Oregon, grab and go cooler Gresham, cashless vending Gresham',
  openGraph: {
    title: 'Haha Smart Coolers in Gresham, Oregon',
    description: 'Revolutionary grab & go vending technology for Gresham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gresham-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gresham-oregon',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GreshamOregonCoolerPageMetadata() {
  return <PageClient />;
}
