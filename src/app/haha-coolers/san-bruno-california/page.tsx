import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Bruno, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Bruno, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Bruno businesses.',
  keywords: 'haha coolers San Bruno, smart vending San Bruno California, grab and go cooler San Bruno, cashless vending San Bruno',
  openGraph: {
    title: 'Haha Smart Coolers in San Bruno, California',
    description: 'Revolutionary grab & go vending technology for San Bruno businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-bruno-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-bruno-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanBrunoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
