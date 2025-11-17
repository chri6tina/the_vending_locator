import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Parker, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Parker, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Parker businesses.',
  keywords: 'haha coolers Parker, smart vending Parker Colorado, grab and go cooler Parker, cashless vending Parker',
  openGraph: {
    title: 'Haha Smart Coolers in Parker, Colorado',
    description: 'Revolutionary grab & go vending technology for Parker businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/parker-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/parker-colorado',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ParkerColoradoCoolerPageMetadata() {
  return <PageClient />;
}
