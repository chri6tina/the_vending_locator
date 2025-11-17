import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Temple, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Temple, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Temple businesses.',
  keywords: 'haha coolers Temple, smart vending Temple Texas, grab and go cooler Temple, cashless vending Temple',
  openGraph: {
    title: 'Haha Smart Coolers in Temple, Texas',
    description: 'Revolutionary grab & go vending technology for Temple businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/temple-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/temple-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TempleTexasCoolerPageMetadata() {
  return <PageClient />;
}
