import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Camden, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Camden, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Camden businesses.',
  keywords: 'haha coolers Camden, smart vending Camden New Jersey, grab and go cooler Camden, cashless vending Camden',
  openGraph: {
    title: 'Haha Smart Coolers in Camden, New Jersey',
    description: 'Revolutionary grab & go vending technology for Camden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/camden-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/camden-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CamdenNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
