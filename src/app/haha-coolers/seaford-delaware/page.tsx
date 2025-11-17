import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Seaford, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Seaford, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Seaford businesses.',
  keywords: 'haha coolers Seaford, smart vending Seaford Delaware, grab and go cooler Seaford, cashless vending Seaford',
  openGraph: {
    title: 'Haha Smart Coolers in Seaford, Delaware',
    description: 'Revolutionary grab & go vending technology for Seaford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/seaford-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/seaford-delaware',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SeafordDelawareCoolerPageMetadata() {
  return <PageClient />;
}
