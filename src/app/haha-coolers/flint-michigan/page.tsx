import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Flint, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Flint, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Flint businesses.',
  keywords: 'haha coolers Flint, smart vending Flint Michigan, grab and go cooler Flint, cashless vending Flint',
  openGraph: {
    title: 'Haha Smart Coolers in Flint, Michigan',
    description: 'Revolutionary grab & go vending technology for Flint businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/flint-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/flint-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FlintMichiganCoolerPageMetadata() {
  return <PageClient />;
}
