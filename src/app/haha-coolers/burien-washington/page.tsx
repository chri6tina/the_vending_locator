import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Burien, Washington | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Burien, Washington. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Burien businesses.',
  keywords: 'haha coolers Burien, smart vending Burien Washington, grab and go cooler Burien, cashless vending Burien',
  openGraph: {
    title: 'Haha Smart Coolers in Burien, Washington',
    description: 'Revolutionary grab & go vending technology for Burien businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/burien-washington',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/burien-washington',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BurienWashingtonCoolerPageMetadata() {
  return <PageClient />;
}
