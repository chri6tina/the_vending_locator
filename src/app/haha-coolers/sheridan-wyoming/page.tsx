import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sheridan, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sheridan, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sheridan businesses.',
  keywords: 'haha coolers Sheridan, smart vending Sheridan Wyoming, grab and go cooler Sheridan, cashless vending Sheridan',
  openGraph: {
    title: 'Haha Smart Coolers in Sheridan, Wyoming',
    description: 'Revolutionary grab & go vending technology for Sheridan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sheridan-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sheridan-wyoming',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SheridanWyomingCoolerPageMetadata() {
  return <PageClient />;
}
