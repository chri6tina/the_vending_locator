import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wilmington, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wilmington, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wilmington businesses.',
  keywords: 'haha coolers Wilmington, smart vending Wilmington North Carolina, grab and go cooler Wilmington, cashless vending Wilmington',
  openGraph: {
    title: 'Haha Smart Coolers in Wilmington, North Carolina',
    description: 'Revolutionary grab & go vending technology for Wilmington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wilmington-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wilmington-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WilmingtonNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
