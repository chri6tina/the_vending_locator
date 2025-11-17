import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Thornton, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Thornton, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Thornton businesses.',
  keywords: 'haha coolers Thornton, smart vending Thornton Colorado, grab and go cooler Thornton, cashless vending Thornton',
  openGraph: {
    title: 'Haha Smart Coolers in Thornton, Colorado',
    description: 'Revolutionary grab & go vending technology for Thornton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/thornton-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/thornton-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ThorntonColoradoCoolerPageMetadata() {
  return <PageClient />;
}
