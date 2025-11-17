import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Soldotna, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Soldotna, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Soldotna businesses.',
  keywords: 'haha coolers Soldotna, smart vending Soldotna Alaska, grab and go cooler Soldotna, cashless vending Soldotna',
  openGraph: {
    title: 'Haha Smart Coolers in Soldotna, Alaska',
    description: 'Revolutionary grab & go vending technology for Soldotna businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/soldotna-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/soldotna-alaska',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SoldotnaAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
