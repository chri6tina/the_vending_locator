import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Deerfield Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Deerfield Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Deerfield Beach businesses.',
  keywords: 'haha coolers Deerfield Beach, smart vending Deerfield Beach Florida, grab and go cooler Deerfield Beach, cashless vending Deerfield Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Deerfield Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Deerfield Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/deerfield-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/deerfield-beach-florida',
  },
};

export default function DeerfieldBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
