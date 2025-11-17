import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Huntsville, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Huntsville, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Huntsville businesses.',
  keywords: 'haha coolers Huntsville, smart vending Huntsville Alabama, grab and go cooler Huntsville, cashless vending Huntsville',
  openGraph: {
    title: 'Haha Smart Coolers in Huntsville, Alabama',
    description: 'Revolutionary grab & go vending technology for Huntsville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/huntsville-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/huntsville-alabama',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HuntsvilleAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
