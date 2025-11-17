import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Simi Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Simi Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Simi Valley businesses.',
  keywords: 'haha coolers Simi Valley, smart vending Simi Valley California, grab and go cooler Simi Valley, cashless vending Simi Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Simi Valley, California',
    description: 'Revolutionary grab & go vending technology for Simi Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/simi-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/simi-valley-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SimiValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
