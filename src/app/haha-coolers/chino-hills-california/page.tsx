import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chino Hills, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chino Hills, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chino Hills businesses.',
  keywords: 'haha coolers Chino Hills, smart vending Chino Hills California, grab and go cooler Chino Hills, cashless vending Chino Hills',
  openGraph: {
    title: 'Haha Smart Coolers in Chino Hills, California',
    description: 'Revolutionary grab & go vending technology for Chino Hills businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chino-hills-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chino-hills-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ChinoHillsCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
