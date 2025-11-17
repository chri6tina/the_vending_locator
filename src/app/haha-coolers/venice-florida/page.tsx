import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Venice, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Venice, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Venice businesses.',
  keywords: 'haha coolers Venice, smart vending Venice Florida, grab and go cooler Venice, cashless vending Venice',
  openGraph: {
    title: 'Haha Smart Coolers in Venice, Florida',
    description: 'Revolutionary grab & go vending technology for Venice businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/venice-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/venice-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VeniceFloridaCoolerPageMetadata() {
  return <PageClient />;
}
