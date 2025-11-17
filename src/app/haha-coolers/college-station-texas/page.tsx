import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in College Station, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in College Station, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for College Station businesses.',
  keywords: 'haha coolers College Station, smart vending College Station Texas, grab and go cooler College Station, cashless vending College Station',
  openGraph: {
    title: 'Haha Smart Coolers in College Station, Texas',
    description: 'Revolutionary grab & go vending technology for College Station businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/college-station-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/college-station-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CollegeStationTexasCoolerPageMetadata() {
  return <PageClient />;
}
