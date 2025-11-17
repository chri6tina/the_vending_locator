import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lancaster, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lancaster, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lancaster businesses.',
  keywords: 'haha coolers Lancaster, smart vending Lancaster California, grab and go cooler Lancaster, cashless vending Lancaster',
  openGraph: {
    title: 'Haha Smart Coolers in Lancaster, California',
    description: 'Revolutionary grab & go vending technology for Lancaster businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lancaster-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lancaster-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LancasterCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
