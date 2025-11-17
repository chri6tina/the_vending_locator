import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Concord, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Concord, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Concord businesses.',
  keywords: 'haha coolers Concord, smart vending Concord North Carolina, grab and go cooler Concord, cashless vending Concord',
  openGraph: {
    title: 'Haha Smart Coolers in Concord, North Carolina',
    description: 'Revolutionary grab & go vending technology for Concord businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/concord-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/concord-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ConcordNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
