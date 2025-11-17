import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Plantation, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Plantation, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Plantation businesses.',
  keywords: 'haha coolers Plantation, smart vending Plantation Florida, grab and go cooler Plantation, cashless vending Plantation',
  openGraph: {
    title: 'Haha Smart Coolers in Plantation, Florida',
    description: 'Revolutionary grab & go vending technology for Plantation businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/plantation-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/plantation-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PlantationFloridaCoolerPageMetadata() {
  return <PageClient />;
}
