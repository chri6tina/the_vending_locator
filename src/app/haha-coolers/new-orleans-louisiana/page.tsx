import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Orleans, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Orleans, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Orleans businesses.',
  keywords: 'haha coolers New Orleans, smart vending New Orleans Louisiana, grab and go cooler New Orleans, cashless vending New Orleans',
  openGraph: {
    title: 'Haha Smart Coolers in New Orleans, Louisiana',
    description: 'Revolutionary grab & go vending technology for New Orleans businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-orleans-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-orleans-louisiana',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewOrleansLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
