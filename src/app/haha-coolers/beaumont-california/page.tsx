import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Beaumont, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Beaumont, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Beaumont businesses.',
  keywords: 'haha coolers Beaumont, smart vending Beaumont California, grab and go cooler Beaumont, cashless vending Beaumont',
  openGraph: {
    title: 'Haha Smart Coolers in Beaumont, California',
    description: 'Revolutionary grab & go vending technology for Beaumont businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/beaumont-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/beaumont-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BeaumontCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
