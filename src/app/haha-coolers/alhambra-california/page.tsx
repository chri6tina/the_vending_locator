import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Alhambra, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Alhambra, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Alhambra businesses.',
  keywords: 'haha coolers Alhambra, smart vending Alhambra California, grab and go cooler Alhambra, cashless vending Alhambra',
  openGraph: {
    title: 'Haha Smart Coolers in Alhambra, California',
    description: 'Revolutionary grab & go vending technology for Alhambra businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/alhambra-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/alhambra-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AlhambraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
