import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Solana Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Solana Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Solana Beach businesses.',
  keywords: 'haha coolers Solana Beach, smart vending Solana Beach California, grab and go cooler Solana Beach, cashless vending Solana Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Solana Beach, California',
    description: 'Revolutionary grab & go vending technology for Solana Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/solana-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/solana-beach-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SolanaBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
