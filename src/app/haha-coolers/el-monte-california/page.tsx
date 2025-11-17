import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in El Monte, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in El Monte, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for El Monte businesses.',
  keywords: 'haha coolers El Monte, smart vending El Monte California, grab and go cooler El Monte, cashless vending El Monte',
  openGraph: {
    title: 'Haha Smart Coolers in El Monte, California',
    description: 'Revolutionary grab & go vending technology for El Monte businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/el-monte-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/el-monte-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ElMonteCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
