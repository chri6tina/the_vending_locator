import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wilson, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wilson, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wilson businesses.',
  keywords: 'haha coolers Wilson, smart vending Wilson North Carolina, grab and go cooler Wilson, cashless vending Wilson',
  openGraph: {
    title: 'Haha Smart Coolers in Wilson, North Carolina',
    description: 'Revolutionary grab & go vending technology for Wilson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wilson-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wilson-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WilsonNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
