import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Des Moines, Iowa | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Des Moines, Iowa. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Des Moines businesses.',
  keywords: 'haha coolers Des Moines, smart vending Des Moines Iowa, grab and go cooler Des Moines, cashless vending Des Moines',
  openGraph: {
    title: 'Haha Smart Coolers in Des Moines, Iowa',
    description: 'Revolutionary grab & go vending technology for Des Moines businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/des-moines-iowa',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/des-moines-iowa',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DesMoinesIowaCoolerPageMetadata() {
  return <PageClient />;
}
