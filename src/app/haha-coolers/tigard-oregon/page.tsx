import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tigard, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tigard, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tigard businesses.',
  keywords: 'haha coolers Tigard, smart vending Tigard Oregon, grab and go cooler Tigard, cashless vending Tigard',
  openGraph: {
    title: 'Haha Smart Coolers in Tigard, Oregon',
    description: 'Revolutionary grab & go vending technology for Tigard businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tigard-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tigard-oregon',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function TigardOregonCoolerPageMetadata() {
  return <PageClient />;
}
