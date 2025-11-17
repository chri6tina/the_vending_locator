import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Evanston, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Evanston, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Evanston businesses.',
  keywords: 'haha coolers Evanston, smart vending Evanston Illinois, grab and go cooler Evanston, cashless vending Evanston',
  openGraph: {
    title: 'Haha Smart Coolers in Evanston, Illinois',
    description: 'Revolutionary grab & go vending technology for Evanston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/evanston-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/evanston-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EvanstonIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
