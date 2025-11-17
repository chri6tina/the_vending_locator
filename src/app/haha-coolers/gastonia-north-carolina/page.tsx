import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gastonia, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gastonia, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gastonia businesses.',
  keywords: 'haha coolers Gastonia, smart vending Gastonia North Carolina, grab and go cooler Gastonia, cashless vending Gastonia',
  openGraph: {
    title: 'Haha Smart Coolers in Gastonia, North Carolina',
    description: 'Revolutionary grab & go vending technology for Gastonia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gastonia-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gastonia-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GastoniaNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
