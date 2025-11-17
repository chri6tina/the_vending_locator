import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kalamazoo, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kalamazoo, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kalamazoo businesses.',
  keywords: 'haha coolers Kalamazoo, smart vending Kalamazoo Michigan, grab and go cooler Kalamazoo, cashless vending Kalamazoo',
  openGraph: {
    title: 'Haha Smart Coolers in Kalamazoo, Michigan',
    description: 'Revolutionary grab & go vending technology for Kalamazoo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kalamazoo-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kalamazoo-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KalamazooMichiganCoolerPageMetadata() {
  return <PageClient />;
}
