import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greenacres, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greenacres, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greenacres businesses.',
  keywords: 'haha coolers Greenacres, smart vending Greenacres Florida, grab and go cooler Greenacres, cashless vending Greenacres',
  openGraph: {
    title: 'Haha Smart Coolers in Greenacres, Florida',
    description: 'Revolutionary grab & go vending technology for Greenacres businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greenacres-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greenacres-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GreenacresFloridaCoolerPageMetadata() {
  return <PageClient />;
}
