import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chicopee, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chicopee, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chicopee businesses.',
  keywords: 'haha coolers Chicopee, smart vending Chicopee Massachusetts, grab and go cooler Chicopee, cashless vending Chicopee',
  openGraph: {
    title: 'Haha Smart Coolers in Chicopee, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Chicopee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chicopee-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chicopee-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ChicopeeMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
