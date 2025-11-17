import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Durham, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Durham, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Durham businesses.',
  keywords: 'haha coolers Durham, smart vending Durham North Carolina, grab and go cooler Durham, cashless vending Durham',
  openGraph: {
    title: 'Haha Smart Coolers in Durham, North Carolina',
    description: 'Revolutionary grab & go vending technology for Durham businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/durham-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/durham-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function DurhamNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
