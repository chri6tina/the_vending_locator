import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Palm Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Palm Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Palm Beach businesses.',
  keywords: 'haha coolers West Palm Beach, smart vending West Palm Beach Florida, grab and go cooler West Palm Beach, cashless vending West Palm Beach',
  openGraph: {
    title: 'Haha Smart Coolers in West Palm Beach, Florida',
    description: 'Revolutionary grab & go vending technology for West Palm Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-palm-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-palm-beach-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WestPalmBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
