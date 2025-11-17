import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jonesboro, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jonesboro, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jonesboro businesses.',
  keywords: 'haha coolers Jonesboro, smart vending Jonesboro Arkansas, grab and go cooler Jonesboro, cashless vending Jonesboro',
  openGraph: {
    title: 'Haha Smart Coolers in Jonesboro, Arkansas',
    description: 'Revolutionary grab & go vending technology for Jonesboro businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jonesboro-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jonesboro-arkansas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function JonesboroArkansasCoolerPageMetadata() {
  return <PageClient />;
}
