import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Midwest City, Oklahoma | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Midwest City, Oklahoma. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Midwest City businesses.',
  keywords: 'haha coolers Midwest City, smart vending Midwest City Oklahoma, grab and go cooler Midwest City, cashless vending Midwest City',
  openGraph: {
    title: 'Haha Smart Coolers in Midwest City, Oklahoma',
    description: 'Revolutionary grab & go vending technology for Midwest City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/midwest-city-oklahoma',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/midwest-city-oklahoma',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MidwestCityOklahomaCoolerPageMetadata() {
  return <PageClient />;
}
