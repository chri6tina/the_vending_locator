import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Monroe, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Monroe, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Monroe businesses.',
  keywords: 'haha coolers Monroe, smart vending Monroe Louisiana, grab and go cooler Monroe, cashless vending Monroe',
  openGraph: {
    title: 'Haha Smart Coolers in Monroe, Louisiana',
    description: 'Revolutionary grab & go vending technology for Monroe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/monroe-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/monroe-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MonroeLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
