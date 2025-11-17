import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Folsom, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Folsom, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Folsom businesses.',
  keywords: 'haha coolers Folsom, smart vending Folsom California, grab and go cooler Folsom, cashless vending Folsom',
  openGraph: {
    title: 'Haha Smart Coolers in Folsom, California',
    description: 'Revolutionary grab & go vending technology for Folsom businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/folsom-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/folsom-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FolsomCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
