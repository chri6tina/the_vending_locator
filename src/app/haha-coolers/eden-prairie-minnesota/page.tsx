import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Eden Prairie, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Eden Prairie, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Eden Prairie businesses.',
  keywords: 'haha coolers Eden Prairie, smart vending Eden Prairie Minnesota, grab and go cooler Eden Prairie, cashless vending Eden Prairie',
  openGraph: {
    title: 'Haha Smart Coolers in Eden Prairie, Minnesota',
    description: 'Revolutionary grab & go vending technology for Eden Prairie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/eden-prairie-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/eden-prairie-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EdenPrairieMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
