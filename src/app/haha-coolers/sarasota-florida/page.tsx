import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sarasota, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sarasota, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sarasota businesses.',
  keywords: 'haha coolers Sarasota, smart vending Sarasota Florida, grab and go cooler Sarasota, cashless vending Sarasota',
  openGraph: {
    title: 'Haha Smart Coolers in Sarasota, Florida',
    description: 'Revolutionary grab & go vending technology for Sarasota businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sarasota-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sarasota-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SarasotaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
