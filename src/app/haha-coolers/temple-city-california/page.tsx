import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Temple City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Temple City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Temple City businesses.',
  keywords: 'haha coolers Temple City, smart vending Temple City California, grab and go cooler Temple City, cashless vending Temple City',
  openGraph: {
    title: 'Haha Smart Coolers in Temple City, California',
    description: 'Revolutionary grab & go vending technology for Temple City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/temple-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/temple-city-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TempleCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
