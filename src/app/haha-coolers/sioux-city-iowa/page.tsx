import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sioux City, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sioux City, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sioux City businesses.',
  keywords: 'haha coolers Sioux City, smart vending Sioux City Iowa, grab and go cooler Sioux City, cashless vending Sioux City',
  openGraph: {
    title: 'Haha Smart Coolers in Sioux City, Iowa',
    description: 'Revolutionary grab & go vending technology for Sioux City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sioux-city-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sioux-city-iowa',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SiouxCityIowaCoolerPageMetadata() {
  return <PageClient />;
}
