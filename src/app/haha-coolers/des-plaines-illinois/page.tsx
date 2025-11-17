import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Des Plaines, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Des Plaines, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Des Plaines businesses.',
  keywords: 'haha coolers Des Plaines, smart vending Des Plaines Illinois, grab and go cooler Des Plaines, cashless vending Des Plaines',
  openGraph: {
    title: 'Haha Smart Coolers in Des Plaines, Illinois',
    description: 'Revolutionary grab & go vending technology for Des Plaines businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/des-plaines-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/des-plaines-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DesPlainesIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
