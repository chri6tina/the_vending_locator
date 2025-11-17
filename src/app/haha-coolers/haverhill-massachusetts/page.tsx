import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Haverhill, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Haverhill, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Haverhill businesses.',
  keywords: 'haha coolers Haverhill, smart vending Haverhill Massachusetts, grab and go cooler Haverhill, cashless vending Haverhill',
  openGraph: {
    title: 'Haha Smart Coolers in Haverhill, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Haverhill businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/haverhill-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/haverhill-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HaverhillMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
