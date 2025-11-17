import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gary, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gary, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gary businesses.',
  keywords: 'haha coolers Gary, smart vending Gary Indiana, grab and go cooler Gary, cashless vending Gary',
  openGraph: {
    title: 'Haha Smart Coolers in Gary, Indiana',
    description: 'Revolutionary grab & go vending technology for Gary businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gary-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gary-indiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function GaryIndianaCoolerPageMetadata() {
  return <PageClient />;
}
