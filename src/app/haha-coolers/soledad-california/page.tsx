import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Soledad, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Soledad, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Soledad businesses.',
  keywords: 'haha coolers Soledad, smart vending Soledad California, grab and go cooler Soledad, cashless vending Soledad',
  openGraph: {
    title: 'Haha Smart Coolers in Soledad, California',
    description: 'Revolutionary grab & go vending technology for Soledad businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/soledad-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/soledad-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SoledadCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
