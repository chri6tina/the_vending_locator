import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Honolulu, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Honolulu, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Honolulu businesses.',
  keywords: 'haha coolers Honolulu, smart vending Honolulu Hawaii, grab and go cooler Honolulu, cashless vending Honolulu',
  openGraph: {
    title: 'Haha Smart Coolers in Honolulu, Hawaii',
    description: 'Revolutionary grab & go vending technology for Honolulu businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/honolulu-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/honolulu-hawaii',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HonoluluHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
