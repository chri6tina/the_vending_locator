import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Decatur, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Decatur, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Decatur businesses.',
  keywords: 'haha coolers Decatur, smart vending Decatur Illinois, grab and go cooler Decatur, cashless vending Decatur',
  openGraph: {
    title: 'Haha Smart Coolers in Decatur, Illinois',
    description: 'Revolutionary grab & go vending technology for Decatur businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/decatur-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/decatur-illinois',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DecaturIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
