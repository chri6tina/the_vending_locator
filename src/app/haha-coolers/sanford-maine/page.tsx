import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Sanford, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Sanford, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Sanford businesses.',
  keywords: 'haha coolers Sanford, smart vending Sanford Maine, grab and go cooler Sanford, cashless vending Sanford',
  openGraph: {
    title: 'Haha Smart Coolers in Sanford, Maine',
    description: 'Revolutionary grab & go vending technology for Sanford businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/sanford-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/sanford-maine',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanfordMaineCoolerPageMetadata() {
  return <PageClient />;
}
