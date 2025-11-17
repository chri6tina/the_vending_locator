import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Louisville, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Louisville, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Louisville businesses.',
  keywords: 'haha coolers Louisville, smart vending Louisville Kentucky, grab and go cooler Louisville, cashless vending Louisville',
  openGraph: {
    title: 'Haha Smart Coolers in Louisville, Kentucky',
    description: 'Revolutionary grab & go vending technology for Louisville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/louisville-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/louisville-kentucky',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LouisvilleKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
