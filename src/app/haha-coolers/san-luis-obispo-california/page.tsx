import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Luis Obispo, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Luis Obispo, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Luis Obispo businesses.',
  keywords: 'haha coolers San Luis Obispo, smart vending San Luis Obispo California, grab and go cooler San Luis Obispo, cashless vending San Luis Obispo',
  openGraph: {
    title: 'Haha Smart Coolers in San Luis Obispo, California',
    description: 'Revolutionary grab & go vending technology for San Luis Obispo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-luis-obispo-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-luis-obispo-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SanLuisObispoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
