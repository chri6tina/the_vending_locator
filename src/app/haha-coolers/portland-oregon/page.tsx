import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Portland, Oregon | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Portland, Oregon. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Portland businesses.',
  keywords: 'haha coolers Portland, smart vending Portland Oregon, grab and go cooler Portland, cashless vending Portland',
  openGraph: {
    title: 'Haha Smart Coolers in Portland, Oregon',
    description: 'Revolutionary grab & go vending technology for Portland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/portland-oregon',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/portland-oregon',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PortlandOregonCoolerPageMetadata() {
  return <PageClient />;
}
