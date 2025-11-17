import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Athens, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Athens, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Athens businesses.',
  keywords: 'haha coolers Athens, smart vending Athens Georgia, grab and go cooler Athens, cashless vending Athens',
  openGraph: {
    title: 'Haha Smart Coolers in Athens, Georgia',
    description: 'Revolutionary grab & go vending technology for Athens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/athens-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/athens-georgia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AthensGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
