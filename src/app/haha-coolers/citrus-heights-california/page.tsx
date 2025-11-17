import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Citrus Heights, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Citrus Heights, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Citrus Heights businesses.',
  keywords: 'haha coolers Citrus Heights, smart vending Citrus Heights California, grab and go cooler Citrus Heights, cashless vending Citrus Heights',
  openGraph: {
    title: 'Haha Smart Coolers in Citrus Heights, California',
    description: 'Revolutionary grab & go vending technology for Citrus Heights businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/citrus-heights-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/citrus-heights-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CitrusHeightsCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
