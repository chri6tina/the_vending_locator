import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yuba City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yuba City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yuba City businesses.',
  keywords: 'haha coolers Yuba City, smart vending Yuba City California, grab and go cooler Yuba City, cashless vending Yuba City',
  openGraph: {
    title: 'Haha Smart Coolers in Yuba City, California',
    description: 'Revolutionary grab & go vending technology for Yuba City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yuba-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yuba-city-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function YubaCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
