import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Watertown, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Watertown, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Watertown businesses.',
  keywords: 'haha coolers Watertown, smart vending Watertown New York, grab and go cooler Watertown, cashless vending Watertown',
  openGraph: {
    title: 'Haha Smart Coolers in Watertown, New York',
    description: 'Revolutionary grab & go vending technology for Watertown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/watertown-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/watertown-new-york',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WatertownNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
