import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Paterson, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Paterson, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Paterson businesses.',
  keywords: 'haha coolers Paterson, smart vending Paterson New Jersey, grab and go cooler Paterson, cashless vending Paterson',
  openGraph: {
    title: 'Haha Smart Coolers in Paterson, New Jersey',
    description: 'Revolutionary grab & go vending technology for Paterson businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/paterson-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/paterson-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PatersonNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
