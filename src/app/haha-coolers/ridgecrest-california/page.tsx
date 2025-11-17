import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ridgecrest, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ridgecrest, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ridgecrest businesses.',
  keywords: 'haha coolers Ridgecrest, smart vending Ridgecrest California, grab and go cooler Ridgecrest, cashless vending Ridgecrest',
  openGraph: {
    title: 'Haha Smart Coolers in Ridgecrest, California',
    description: 'Revolutionary grab & go vending technology for Ridgecrest businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ridgecrest-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ridgecrest-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RidgecrestCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
