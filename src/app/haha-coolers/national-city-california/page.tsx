import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in National City, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in National City, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for National City businesses.',
  keywords: 'haha coolers National City, smart vending National City California, grab and go cooler National City, cashless vending National City',
  openGraph: {
    title: 'Haha Smart Coolers in National City, California',
    description: 'Revolutionary grab & go vending technology for National City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/national-city-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/national-city-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NationalCityCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
