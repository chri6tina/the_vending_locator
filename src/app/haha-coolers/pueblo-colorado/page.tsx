import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pueblo, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pueblo, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pueblo businesses.',
  keywords: 'haha coolers Pueblo, smart vending Pueblo Colorado, grab and go cooler Pueblo, cashless vending Pueblo',
  openGraph: {
    title: 'Haha Smart Coolers in Pueblo, Colorado',
    description: 'Revolutionary grab & go vending technology for Pueblo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pueblo-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pueblo-colorado',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PuebloColoradoCoolerPageMetadata() {
  return <PageClient />;
}
