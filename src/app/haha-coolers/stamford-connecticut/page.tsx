import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Stamford, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Stamford, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Stamford businesses.',
  keywords: 'haha coolers Stamford, smart vending Stamford Connecticut, grab and go cooler Stamford, cashless vending Stamford',
  openGraph: {
    title: 'Haha Smart Coolers in Stamford, Connecticut',
    description: 'Revolutionary grab & go vending technology for Stamford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/stamford-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/stamford-connecticut',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function StamfordConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
