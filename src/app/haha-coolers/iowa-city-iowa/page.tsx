import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Iowa City, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Iowa City, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Iowa City businesses.',
  keywords: 'haha coolers Iowa City, smart vending Iowa City Iowa, grab and go cooler Iowa City, cashless vending Iowa City',
  openGraph: {
    title: 'Haha Smart Coolers in Iowa City, Iowa',
    description: 'Revolutionary grab & go vending technology for Iowa City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/iowa-city-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/iowa-city-iowa',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function IowaCityIowaCoolerPageMetadata() {
  return <PageClient />;
}
