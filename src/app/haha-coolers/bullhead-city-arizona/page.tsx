import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bullhead City, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bullhead City, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bullhead City businesses.',
  keywords: 'haha coolers Bullhead City, smart vending Bullhead City Arizona, grab and go cooler Bullhead City, cashless vending Bullhead City',
  openGraph: {
    title: 'Haha Smart Coolers in Bullhead City, Arizona',
    description: 'Revolutionary grab & go vending technology for Bullhead City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bullhead-city-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bullhead-city-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BullheadCityArizonaCoolerPageMetadata() {
  return <PageClient />;
}
