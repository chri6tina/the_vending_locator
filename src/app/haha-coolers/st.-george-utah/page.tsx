import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in St. George, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in St. George, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for St. George businesses.',
  keywords: 'haha coolers St. George, smart vending St. George Utah, grab and go cooler St. George, cashless vending St. George',
  openGraph: {
    title: 'Haha Smart Coolers in St. George, Utah',
    description: 'Revolutionary grab & go vending technology for St. George businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/st.-george-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/st.-george-utah',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function StGeorgeUtahCoolerPageMetadata() {
  return <PageClient />;
}
