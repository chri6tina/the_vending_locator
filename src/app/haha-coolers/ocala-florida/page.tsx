import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ocala, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ocala, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ocala businesses.',
  keywords: 'haha coolers Ocala, smart vending Ocala Florida, grab and go cooler Ocala, cashless vending Ocala',
  openGraph: {
    title: 'Haha Smart Coolers in Ocala, Florida',
    description: 'Revolutionary grab & go vending technology for Ocala businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ocala-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ocala-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OcalaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
