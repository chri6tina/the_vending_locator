import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Upland, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Upland, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Upland businesses.',
  keywords: 'haha coolers Upland, smart vending Upland California, grab and go cooler Upland, cashless vending Upland',
  openGraph: {
    title: 'Haha Smart Coolers in Upland, California',
    description: 'Revolutionary grab & go vending technology for Upland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/upland-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/upland-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function UplandCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
