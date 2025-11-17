import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coral Gables, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coral Gables, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coral Gables businesses.',
  keywords: 'haha coolers Coral Gables, smart vending Coral Gables Florida, grab and go cooler Coral Gables, cashless vending Coral Gables',
  openGraph: {
    title: 'Haha Smart Coolers in Coral Gables, Florida',
    description: 'Revolutionary grab & go vending technology for Coral Gables businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coral-gables-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coral-gables-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CoralGablesFloridaCoolerPageMetadata() {
  return <PageClient />;
}
