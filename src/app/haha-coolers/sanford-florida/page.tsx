import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sanford, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sanford, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sanford businesses.',
  keywords: 'haha coolers Sanford, smart vending Sanford Florida, grab and go cooler Sanford, cashless vending Sanford',
  openGraph: {
    title: 'Haha Smart Coolers in Sanford, Florida',
    description: 'Revolutionary grab & go vending technology for Sanford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sanford-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sanford-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanfordFloridaCoolerPageMetadata() {
  return <PageClient />;
}
