import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pine Bluff, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pine Bluff, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pine Bluff businesses.',
  keywords: 'haha coolers Pine Bluff, smart vending Pine Bluff Arkansas, grab and go cooler Pine Bluff, cashless vending Pine Bluff',
  openGraph: {
    title: 'Haha Smart Coolers in Pine Bluff, Arkansas',
    description: 'Revolutionary grab & go vending technology for Pine Bluff businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pine-bluff-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pine-bluff-arkansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PineBluffArkansasCoolerPageMetadata() {
  return <PageClient />;
}
