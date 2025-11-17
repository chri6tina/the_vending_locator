import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rialto, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rialto, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rialto businesses.',
  keywords: 'haha coolers Rialto, smart vending Rialto California, grab and go cooler Rialto, cashless vending Rialto',
  openGraph: {
    title: 'Haha Smart Coolers in Rialto, California',
    description: 'Revolutionary grab & go vending technology for Rialto businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rialto-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rialto-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RialtoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
