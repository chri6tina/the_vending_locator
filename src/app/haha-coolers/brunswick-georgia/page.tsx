import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brunswick, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brunswick, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brunswick businesses.',
  keywords: 'haha coolers Brunswick, smart vending Brunswick Georgia, grab and go cooler Brunswick, cashless vending Brunswick',
  openGraph: {
    title: 'Haha Smart Coolers in Brunswick, Georgia',
    description: 'Revolutionary grab & go vending technology for Brunswick businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brunswick-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brunswick-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrunswickGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
