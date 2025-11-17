import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Mesa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Mesa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Mesa businesses.',
  keywords: 'haha coolers La Mesa, smart vending La Mesa California, grab and go cooler La Mesa, cashless vending La Mesa',
  openGraph: {
    title: 'Haha Smart Coolers in La Mesa, California',
    description: 'Revolutionary grab & go vending technology for La Mesa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-mesa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-mesa-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LaMesaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
