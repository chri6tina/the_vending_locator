import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rapid City, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rapid City, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rapid City businesses.',
  keywords: 'haha coolers Rapid City, smart vending Rapid City South Dakota, grab and go cooler Rapid City, cashless vending Rapid City',
  openGraph: {
    title: 'Haha Smart Coolers in Rapid City, South Dakota',
    description: 'Revolutionary grab & go vending technology for Rapid City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rapid-city-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rapid-city-south-dakota',
  },
};

export default function RapidCitySouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
