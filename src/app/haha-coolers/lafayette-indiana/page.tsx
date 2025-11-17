import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lafayette, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lafayette, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lafayette businesses.',
  keywords: 'haha coolers Lafayette, smart vending Lafayette Indiana, grab and go cooler Lafayette, cashless vending Lafayette',
  openGraph: {
    title: 'Haha Smart Coolers in Lafayette, Indiana',
    description: 'Revolutionary grab & go vending technology for Lafayette businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lafayette-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lafayette-indiana',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LafayetteIndianaCoolerPageMetadata() {
  return <PageClient />;
}
