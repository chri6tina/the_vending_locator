import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jacksonville, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jacksonville, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jacksonville businesses.',
  keywords: 'haha coolers Jacksonville, smart vending Jacksonville North Carolina, grab and go cooler Jacksonville, cashless vending Jacksonville',
  openGraph: {
    title: 'Haha Smart Coolers in Jacksonville, North Carolina',
    description: 'Revolutionary grab & go vending technology for Jacksonville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jacksonville-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jacksonville-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JacksonvilleNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
