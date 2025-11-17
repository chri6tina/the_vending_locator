import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fayetteville, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fayetteville, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fayetteville businesses.',
  keywords: 'haha coolers Fayetteville, smart vending Fayetteville North Carolina, grab and go cooler Fayetteville, cashless vending Fayetteville',
  openGraph: {
    title: 'Haha Smart Coolers in Fayetteville, North Carolina',
    description: 'Revolutionary grab & go vending technology for Fayetteville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fayetteville-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fayetteville-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FayettevilleNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
