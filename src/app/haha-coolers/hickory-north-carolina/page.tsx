import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hickory, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hickory, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hickory businesses.',
  keywords: 'haha coolers Hickory, smart vending Hickory North Carolina, grab and go cooler Hickory, cashless vending Hickory',
  openGraph: {
    title: 'Haha Smart Coolers in Hickory, North Carolina',
    description: 'Revolutionary grab & go vending technology for Hickory businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hickory-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hickory-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HickoryNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
