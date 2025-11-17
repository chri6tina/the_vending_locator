import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arlington, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arlington, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arlington businesses.',
  keywords: 'haha coolers Arlington, smart vending Arlington Texas, grab and go cooler Arlington, cashless vending Arlington',
  openGraph: {
    title: 'Haha Smart Coolers in Arlington, Texas',
    description: 'Revolutionary grab & go vending technology for Arlington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arlington-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arlington-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ArlingtonTexasCoolerPageMetadata() {
  return <PageClient />;
}
