import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sugar Land, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sugar Land, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sugar Land businesses.',
  keywords: 'haha coolers Sugar Land, smart vending Sugar Land Texas, grab and go cooler Sugar Land, cashless vending Sugar Land',
  openGraph: {
    title: 'Haha Smart Coolers in Sugar Land, Texas',
    description: 'Revolutionary grab & go vending technology for Sugar Land businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sugar-land-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sugar-land-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SugarLandTexasCoolerPageMetadata() {
  return <PageClient />;
}
