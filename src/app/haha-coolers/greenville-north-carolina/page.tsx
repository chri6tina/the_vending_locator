import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Greenville, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Greenville, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Greenville businesses.',
  keywords: 'haha coolers Greenville, smart vending Greenville North Carolina, grab and go cooler Greenville, cashless vending Greenville',
  openGraph: {
    title: 'Haha Smart Coolers in Greenville, North Carolina',
    description: 'Revolutionary grab & go vending technology for Greenville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/greenville-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/greenville-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GreenvilleNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
