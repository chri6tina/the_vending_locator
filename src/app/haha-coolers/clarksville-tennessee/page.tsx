import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Clarksville, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Clarksville, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Clarksville businesses.',
  keywords: 'haha coolers Clarksville, smart vending Clarksville Tennessee, grab and go cooler Clarksville, cashless vending Clarksville',
  openGraph: {
    title: 'Haha Smart Coolers in Clarksville, Tennessee',
    description: 'Revolutionary grab & go vending technology for Clarksville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/clarksville-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/clarksville-tennessee',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ClarksvilleTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
