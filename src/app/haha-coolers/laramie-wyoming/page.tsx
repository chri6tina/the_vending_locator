import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laramie, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laramie, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laramie businesses.',
  keywords: 'haha coolers Laramie, smart vending Laramie Wyoming, grab and go cooler Laramie, cashless vending Laramie',
  openGraph: {
    title: 'Haha Smart Coolers in Laramie, Wyoming',
    description: 'Revolutionary grab & go vending technology for Laramie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laramie-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laramie-wyoming',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LaramieWyomingCoolerPageMetadata() {
  return <PageClient />;
}
