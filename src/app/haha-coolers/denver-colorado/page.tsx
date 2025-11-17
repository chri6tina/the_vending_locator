import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Denver, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Denver, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Denver businesses.',
  keywords: 'haha coolers Denver, smart vending Denver Colorado, grab and go cooler Denver, cashless vending Denver',
  openGraph: {
    title: 'Haha Smart Coolers in Denver, Colorado',
    description: 'Revolutionary grab & go vending technology for Denver businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/denver-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/denver-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DenverColoradoCoolerPageMetadata() {
  return <PageClient />;
}
