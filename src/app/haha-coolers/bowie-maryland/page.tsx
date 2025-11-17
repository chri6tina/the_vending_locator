import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bowie, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bowie, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bowie businesses.',
  keywords: 'haha coolers Bowie, smart vending Bowie Maryland, grab and go cooler Bowie, cashless vending Bowie',
  openGraph: {
    title: 'Haha Smart Coolers in Bowie, Maryland',
    description: 'Revolutionary grab & go vending technology for Bowie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bowie-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bowie-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BowieMarylandCoolerPageMetadata() {
  return <PageClient />;
}
