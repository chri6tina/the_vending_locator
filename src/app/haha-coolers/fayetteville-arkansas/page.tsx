import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fayetteville, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fayetteville, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fayetteville businesses.',
  keywords: 'haha coolers Fayetteville, smart vending Fayetteville Arkansas, grab and go cooler Fayetteville, cashless vending Fayetteville',
  openGraph: {
    title: 'Haha Smart Coolers in Fayetteville, Arkansas',
    description: 'Revolutionary grab & go vending technology for Fayetteville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fayetteville-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fayetteville-arkansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FayettevilleArkansasCoolerPageMetadata() {
  return <PageClient />;
}
