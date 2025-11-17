import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Taunton, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Taunton, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Taunton businesses.',
  keywords: 'haha coolers Taunton, smart vending Taunton Massachusetts, grab and go cooler Taunton, cashless vending Taunton',
  openGraph: {
    title: 'Haha Smart Coolers in Taunton, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Taunton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/taunton-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/taunton-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TauntonMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
