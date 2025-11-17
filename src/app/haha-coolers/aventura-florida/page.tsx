import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Aventura, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Aventura, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Aventura businesses.',
  keywords: 'haha coolers Aventura, smart vending Aventura Florida, grab and go cooler Aventura, cashless vending Aventura',
  openGraph: {
    title: 'Haha Smart Coolers in Aventura, Florida',
    description: 'Revolutionary grab & go vending technology for Aventura businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/aventura-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/aventura-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AventuraFloridaCoolerPageMetadata() {
  return <PageClient />;
}
