import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Johnson City, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Johnson City, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Johnson City businesses.',
  keywords: 'haha coolers Johnson City, smart vending Johnson City Tennessee, grab and go cooler Johnson City, cashless vending Johnson City',
  openGraph: {
    title: 'Haha Smart Coolers in Johnson City, Tennessee',
    description: 'Revolutionary grab & go vending technology for Johnson City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/johnson-city-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/johnson-city-tennessee',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JohnsonCityTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
