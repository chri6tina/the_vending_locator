import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gadsden, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gadsden, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gadsden businesses.',
  keywords: 'haha coolers Gadsden, smart vending Gadsden Alabama, grab and go cooler Gadsden, cashless vending Gadsden',
  openGraph: {
    title: 'Haha Smart Coolers in Gadsden, Alabama',
    description: 'Revolutionary grab & go vending technology for Gadsden businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gadsden-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gadsden-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GadsdenAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
