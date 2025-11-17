import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Brownsville, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Brownsville, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Brownsville businesses.',
  keywords: 'haha coolers Brownsville, smart vending Brownsville Texas, grab and go cooler Brownsville, cashless vending Brownsville',
  openGraph: {
    title: 'Haha Smart Coolers in Brownsville, Texas',
    description: 'Revolutionary grab & go vending technology for Brownsville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/brownsville-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/brownsville-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BrownsvilleTexasCoolerPageMetadata() {
  return <PageClient />;
}
