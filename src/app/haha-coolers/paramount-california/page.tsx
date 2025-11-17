import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Paramount, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Paramount, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Paramount businesses.',
  keywords: 'haha coolers Paramount, smart vending Paramount California, grab and go cooler Paramount, cashless vending Paramount',
  openGraph: {
    title: 'Haha Smart Coolers in Paramount, California',
    description: 'Revolutionary grab & go vending technology for Paramount businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/paramount-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/paramount-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ParamountCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
