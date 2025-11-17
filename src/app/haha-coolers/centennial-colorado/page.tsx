import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Centennial, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Centennial, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Centennial businesses.',
  keywords: 'haha coolers Centennial, smart vending Centennial Colorado, grab and go cooler Centennial, cashless vending Centennial',
  openGraph: {
    title: 'Haha Smart Coolers in Centennial, Colorado',
    description: 'Revolutionary grab & go vending technology for Centennial businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/centennial-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/centennial-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CentennialColoradoCoolerPageMetadata() {
  return <PageClient />;
}
