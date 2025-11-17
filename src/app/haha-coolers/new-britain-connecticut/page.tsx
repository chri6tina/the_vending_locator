import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Britain, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Britain, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Britain businesses.',
  keywords: 'haha coolers New Britain, smart vending New Britain Connecticut, grab and go cooler New Britain, cashless vending New Britain',
  openGraph: {
    title: 'Haha Smart Coolers in New Britain, Connecticut',
    description: 'Revolutionary grab & go vending technology for New Britain businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-britain-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-britain-connecticut',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NewBritainConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
