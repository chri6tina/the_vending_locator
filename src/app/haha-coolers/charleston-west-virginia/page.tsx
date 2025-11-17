import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Charleston, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Charleston, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Charleston businesses.',
  keywords: 'haha coolers Charleston, smart vending Charleston West Virginia, grab and go cooler Charleston, cashless vending Charleston',
  openGraph: {
    title: 'Haha Smart Coolers in Charleston, West Virginia',
    description: 'Revolutionary grab & go vending technology for Charleston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/charleston-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/charleston-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CharlestonWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
