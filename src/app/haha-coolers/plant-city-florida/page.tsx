import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Plant City, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Plant City, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Plant City businesses.',
  keywords: 'haha coolers Plant City, smart vending Plant City Florida, grab and go cooler Plant City, cashless vending Plant City',
  openGraph: {
    title: 'Haha Smart Coolers in Plant City, Florida',
    description: 'Revolutionary grab & go vending technology for Plant City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/plant-city-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/plant-city-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PlantCityFloridaCoolerPageMetadata() {
  return <PageClient />;
}
