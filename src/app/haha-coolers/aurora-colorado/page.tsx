import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Aurora, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Aurora, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Aurora businesses.',
  keywords: 'haha coolers Aurora, smart vending Aurora Colorado, grab and go cooler Aurora, cashless vending Aurora',
  openGraph: {
    title: 'Haha Smart Coolers in Aurora, Colorado',
    description: 'Revolutionary grab & go vending technology for Aurora businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/aurora-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/aurora-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AuroraColoradoCoolerPageMetadata() {
  return <PageClient />;
}
