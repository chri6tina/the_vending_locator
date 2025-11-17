import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Modesto, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Modesto, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Modesto businesses.',
  keywords: 'haha coolers Modesto, smart vending Modesto California, grab and go cooler Modesto, cashless vending Modesto',
  openGraph: {
    title: 'Haha Smart Coolers in Modesto, California',
    description: 'Revolutionary grab & go vending technology for Modesto businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/modesto-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/modesto-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ModestoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
