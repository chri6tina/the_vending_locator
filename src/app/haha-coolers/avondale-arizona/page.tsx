import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Avondale, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Avondale, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Avondale businesses.',
  keywords: 'haha coolers Avondale, smart vending Avondale Arizona, grab and go cooler Avondale, cashless vending Avondale',
  openGraph: {
    title: 'Haha Smart Coolers in Avondale, Arizona',
    description: 'Revolutionary grab & go vending technology for Avondale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/avondale-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/avondale-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AvondaleArizonaCoolerPageMetadata() {
  return <PageClient />;
}
