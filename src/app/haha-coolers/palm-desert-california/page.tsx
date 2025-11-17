import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Desert, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Desert, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Desert businesses.',
  keywords: 'haha coolers Palm Desert, smart vending Palm Desert California, grab and go cooler Palm Desert, cashless vending Palm Desert',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Desert, California',
    description: 'Revolutionary grab & go vending technology for Palm Desert businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-desert-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-desert-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PalmDesertCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
