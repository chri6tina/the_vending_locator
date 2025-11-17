import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Medford, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Medford, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Medford businesses.',
  keywords: 'haha coolers Medford, smart vending Medford Oregon, grab and go cooler Medford, cashless vending Medford',
  openGraph: {
    title: 'Haha Smart Coolers in Medford, Oregon',
    description: 'Revolutionary grab & go vending technology for Medford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/medford-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/medford-oregon',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MedfordOregonCoolerPageMetadata() {
  return <PageClient />;
}
