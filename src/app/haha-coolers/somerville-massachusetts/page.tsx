import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Somerville, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Somerville, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Somerville businesses.',
  keywords: 'haha coolers Somerville, smart vending Somerville Massachusetts, grab and go cooler Somerville, cashless vending Somerville',
  openGraph: {
    title: 'Haha Smart Coolers in Somerville, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Somerville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/somerville-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/somerville-massachusetts',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SomervilleMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
