import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Franklin, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Franklin, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Franklin businesses.',
  keywords: 'haha coolers Franklin, smart vending Franklin Tennessee, grab and go cooler Franklin, cashless vending Franklin',
  openGraph: {
    title: 'Haha Smart Coolers in Franklin, Tennessee',
    description: 'Revolutionary grab & go vending technology for Franklin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/franklin-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/franklin-tennessee',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FranklinTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
