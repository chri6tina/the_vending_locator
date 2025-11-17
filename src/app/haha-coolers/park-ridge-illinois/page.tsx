import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Park Ridge, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Park Ridge, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Park Ridge businesses.',
  keywords: 'haha coolers Park Ridge, smart vending Park Ridge Illinois, grab and go cooler Park Ridge, cashless vending Park Ridge',
  openGraph: {
    title: 'Haha Smart Coolers in Park Ridge, Illinois',
    description: 'Revolutionary grab & go vending technology for Park Ridge businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/park-ridge-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/park-ridge-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ParkRidgeIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
