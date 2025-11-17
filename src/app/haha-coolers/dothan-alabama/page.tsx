import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dothan, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dothan, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dothan businesses.',
  keywords: 'haha coolers Dothan, smart vending Dothan Alabama, grab and go cooler Dothan, cashless vending Dothan',
  openGraph: {
    title: 'Haha Smart Coolers in Dothan, Alabama',
    description: 'Revolutionary grab & go vending technology for Dothan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dothan-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dothan-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DothanAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
