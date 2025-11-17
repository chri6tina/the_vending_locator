import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gillette, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gillette, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gillette businesses.',
  keywords: 'haha coolers Gillette, smart vending Gillette Wyoming, grab and go cooler Gillette, cashless vending Gillette',
  openGraph: {
    title: 'Haha Smart Coolers in Gillette, Wyoming',
    description: 'Revolutionary grab & go vending technology for Gillette businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gillette-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gillette-wyoming',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GilletteWyomingCoolerPageMetadata() {
  return <PageClient />;
}
