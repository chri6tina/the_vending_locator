import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Suisun City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Suisun City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Suisun City businesses.',
  keywords: 'haha coolers Suisun City, smart vending Suisun City California, grab and go cooler Suisun City, cashless vending Suisun City',
  openGraph: {
    title: 'Haha Smart Coolers in Suisun City, California',
    description: 'Revolutionary grab & go vending technology for Suisun City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/suisun-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/suisun-city-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SuisunCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
