import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lomita, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lomita, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lomita businesses.',
  keywords: 'haha coolers Lomita, smart vending Lomita California, grab and go cooler Lomita, cashless vending Lomita',
  openGraph: {
    title: 'Haha Smart Coolers in Lomita, California',
    description: 'Revolutionary grab & go vending technology for Lomita businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lomita-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lomita-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LomitaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
