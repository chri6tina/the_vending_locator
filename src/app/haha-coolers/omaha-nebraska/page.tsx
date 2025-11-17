import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Omaha, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Omaha, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Omaha businesses.',
  keywords: 'haha coolers Omaha, smart vending Omaha Nebraska, grab and go cooler Omaha, cashless vending Omaha',
  openGraph: {
    title: 'Haha Smart Coolers in Omaha, Nebraska',
    description: 'Revolutionary grab & go vending technology for Omaha businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/omaha-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/omaha-nebraska',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OmahaNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
