import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Jacinto, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Jacinto, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Jacinto businesses.',
  keywords: 'haha coolers San Jacinto, smart vending San Jacinto California, grab and go cooler San Jacinto, cashless vending San Jacinto',
  openGraph: {
    title: 'Haha Smart Coolers in San Jacinto, California',
    description: 'Revolutionary grab & go vending technology for San Jacinto businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-jacinto-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-jacinto-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanJacintoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
