import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sanger, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sanger, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sanger businesses.',
  keywords: 'haha coolers Sanger, smart vending Sanger California, grab and go cooler Sanger, cashless vending Sanger',
  openGraph: {
    title: 'Haha Smart Coolers in Sanger, California',
    description: 'Revolutionary grab & go vending technology for Sanger businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sanger-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sanger-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SangerCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
