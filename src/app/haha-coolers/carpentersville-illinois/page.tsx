import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carpentersville, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carpentersville, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carpentersville businesses.',
  keywords: 'haha coolers Carpentersville, smart vending Carpentersville Illinois, grab and go cooler Carpentersville, cashless vending Carpentersville',
  openGraph: {
    title: 'Haha Smart Coolers in Carpentersville, Illinois',
    description: 'Revolutionary grab & go vending technology for Carpentersville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carpentersville-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carpentersville-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CarpentersvilleIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
