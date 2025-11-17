import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brawley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brawley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brawley businesses.',
  keywords: 'haha coolers Brawley, smart vending Brawley California, grab and go cooler Brawley, cashless vending Brawley',
  openGraph: {
    title: 'Haha Smart Coolers in Brawley, California',
    description: 'Revolutionary grab & go vending technology for Brawley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brawley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brawley-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BrawleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
