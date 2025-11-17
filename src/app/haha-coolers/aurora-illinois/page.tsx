import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Aurora, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Aurora, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Aurora businesses.',
  keywords: 'haha coolers Aurora, smart vending Aurora Illinois, grab and go cooler Aurora, cashless vending Aurora',
  openGraph: {
    title: 'Haha Smart Coolers in Aurora, Illinois',
    description: 'Revolutionary grab & go vending technology for Aurora businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/aurora-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/aurora-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AuroraIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
