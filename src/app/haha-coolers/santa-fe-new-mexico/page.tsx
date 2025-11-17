import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Santa Fe, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Santa Fe, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Santa Fe businesses.',
  keywords: 'haha coolers Santa Fe, smart vending Santa Fe New Mexico, grab and go cooler Santa Fe, cashless vending Santa Fe',
  openGraph: {
    title: 'Haha Smart Coolers in Santa Fe, New Mexico',
    description: 'Revolutionary grab & go vending technology for Santa Fe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/santa-fe-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/santa-fe-new-mexico',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SantaFeNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
