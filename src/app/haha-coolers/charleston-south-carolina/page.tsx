import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Charleston, South Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Charleston, South Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Charleston businesses.',
  keywords: 'haha coolers Charleston, smart vending Charleston South Carolina, grab and go cooler Charleston, cashless vending Charleston',
  openGraph: {
    title: 'Haha Smart Coolers in Charleston, South Carolina',
    description: 'Revolutionary grab & go vending technology for Charleston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/charleston-south-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/charleston-south-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CharlestonSouthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
