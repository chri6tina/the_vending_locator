import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bradenton, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bradenton, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bradenton businesses.',
  keywords: 'haha coolers Bradenton, smart vending Bradenton Florida, grab and go cooler Bradenton, cashless vending Bradenton',
  openGraph: {
    title: 'Haha Smart Coolers in Bradenton, Florida',
    description: 'Revolutionary grab & go vending technology for Bradenton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bradenton-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bradenton-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BradentonFloridaCoolerPageMetadata() {
  return <PageClient />;
}
