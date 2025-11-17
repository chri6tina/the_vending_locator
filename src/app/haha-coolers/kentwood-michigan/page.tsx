import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kentwood, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kentwood, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kentwood businesses.',
  keywords: 'haha coolers Kentwood, smart vending Kentwood Michigan, grab and go cooler Kentwood, cashless vending Kentwood',
  openGraph: {
    title: 'Haha Smart Coolers in Kentwood, Michigan',
    description: 'Revolutionary grab & go vending technology for Kentwood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kentwood-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kentwood-michigan',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KentwoodMichiganCoolerPageMetadata() {
  return <PageClient />;
}
