import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Irvine, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Irvine, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Irvine businesses.',
  keywords: 'haha coolers Irvine, smart vending Irvine California, grab and go cooler Irvine, cashless vending Irvine',
  openGraph: {
    title: 'Haha Smart Coolers in Irvine, California',
    description: 'Revolutionary grab & go vending technology for Irvine businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/irvine-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/irvine-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function IrvineCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
