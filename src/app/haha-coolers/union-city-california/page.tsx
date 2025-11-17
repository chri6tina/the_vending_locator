import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Union City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Union City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Union City businesses.',
  keywords: 'haha coolers Union City, smart vending Union City California, grab and go cooler Union City, cashless vending Union City',
  openGraph: {
    title: 'Haha Smart Coolers in Union City, California',
    description: 'Revolutionary grab & go vending technology for Union City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/union-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/union-city-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function UnionCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
