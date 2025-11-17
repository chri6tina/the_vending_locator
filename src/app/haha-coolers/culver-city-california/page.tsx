import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Culver City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Culver City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Culver City businesses.',
  keywords: 'haha coolers Culver City, smart vending Culver City California, grab and go cooler Culver City, cashless vending Culver City',
  openGraph: {
    title: 'Haha Smart Coolers in Culver City, California',
    description: 'Revolutionary grab & go vending technology for Culver City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/culver-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/culver-city-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CulverCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
