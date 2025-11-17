import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tustin, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tustin, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tustin businesses.',
  keywords: 'haha coolers Tustin, smart vending Tustin California, grab and go cooler Tustin, cashless vending Tustin',
  openGraph: {
    title: 'Haha Smart Coolers in Tustin, California',
    description: 'Revolutionary grab & go vending technology for Tustin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tustin-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tustin-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TustinCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
