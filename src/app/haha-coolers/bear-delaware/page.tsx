import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bear, Delaware | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bear, Delaware. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bear businesses.',
  keywords: 'haha coolers Bear, smart vending Bear Delaware, grab and go cooler Bear, cashless vending Bear',
  openGraph: {
    title: 'Haha Smart Coolers in Bear, Delaware',
    description: 'Revolutionary grab & go vending technology for Bear businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bear-delaware',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bear-delaware',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BearDelawareCoolerPageMetadata() {
  return <PageClient />;
}
