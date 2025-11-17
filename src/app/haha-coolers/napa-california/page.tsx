import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Napa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Napa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Napa businesses.',
  keywords: 'haha coolers Napa, smart vending Napa California, grab and go cooler Napa, cashless vending Napa',
  openGraph: {
    title: 'Haha Smart Coolers in Napa, California',
    description: 'Revolutionary grab & go vending technology for Napa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/napa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/napa-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NapaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
