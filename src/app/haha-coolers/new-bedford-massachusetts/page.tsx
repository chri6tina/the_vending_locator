import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Bedford, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Bedford, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Bedford businesses.',
  keywords: 'haha coolers New Bedford, smart vending New Bedford Massachusetts, grab and go cooler New Bedford, cashless vending New Bedford',
  openGraph: {
    title: 'Haha Smart Coolers in New Bedford, Massachusetts',
    description: 'Revolutionary grab & go vending technology for New Bedford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-bedford-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-bedford-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function NewBedfordMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
