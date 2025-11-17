import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fullerton, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fullerton, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fullerton businesses.',
  keywords: 'haha coolers Fullerton, smart vending Fullerton California, grab and go cooler Fullerton, cashless vending Fullerton',
  openGraph: {
    title: 'Haha Smart Coolers in Fullerton, California',
    description: 'Revolutionary grab & go vending technology for Fullerton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fullerton-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fullerton-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FullertonCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
