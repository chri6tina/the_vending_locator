import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in North Platte, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in North Platte, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for North Platte businesses.',
  keywords: 'haha coolers North Platte, smart vending North Platte Nebraska, grab and go cooler North Platte, cashless vending North Platte',
  openGraph: {
    title: 'Haha Smart Coolers in North Platte, Nebraska',
    description: 'Revolutionary grab & go vending technology for North Platte businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/north-platte-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/north-platte-nebraska',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NorthPlatteNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
