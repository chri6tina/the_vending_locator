import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Burnsville, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Burnsville, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Burnsville businesses.',
  keywords: 'haha coolers Burnsville, smart vending Burnsville Minnesota, grab and go cooler Burnsville, cashless vending Burnsville',
  openGraph: {
    title: 'Haha Smart Coolers in Burnsville, Minnesota',
    description: 'Revolutionary grab & go vending technology for Burnsville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/burnsville-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/burnsville-minnesota',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BurnsvilleMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
