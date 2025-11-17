import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fort Myers, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fort Myers, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fort Myers businesses.',
  keywords: 'haha coolers Fort Myers, smart vending Fort Myers Florida, grab and go cooler Fort Myers, cashless vending Fort Myers',
  openGraph: {
    title: 'Haha Smart Coolers in Fort Myers, Florida',
    description: 'Revolutionary grab & go vending technology for Fort Myers businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fort-myers-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fort-myers-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function FortMyersFloridaCoolerPageMetadata() {
  return <PageClient />;
}
