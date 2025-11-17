import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kahului, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kahului, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kahului businesses.',
  keywords: 'haha coolers Kahului, smart vending Kahului Hawaii, grab and go cooler Kahului, cashless vending Kahului',
  openGraph: {
    title: 'Haha Smart Coolers in Kahului, Hawaii',
    description: 'Revolutionary grab & go vending technology for Kahului businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kahului-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kahului-hawaii',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KahuluiHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
