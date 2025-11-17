import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salisbury, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salisbury, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salisbury businesses.',
  keywords: 'haha coolers Salisbury, smart vending Salisbury North Carolina, grab and go cooler Salisbury, cashless vending Salisbury',
  openGraph: {
    title: 'Haha Smart Coolers in Salisbury, North Carolina',
    description: 'Revolutionary grab & go vending technology for Salisbury businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salisbury-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salisbury-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SalisburyNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
