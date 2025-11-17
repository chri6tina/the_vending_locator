import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fairmont, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fairmont, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fairmont businesses.',
  keywords: 'haha coolers Fairmont, smart vending Fairmont West Virginia, grab and go cooler Fairmont, cashless vending Fairmont',
  openGraph: {
    title: 'Haha Smart Coolers in Fairmont, West Virginia',
    description: 'Revolutionary grab & go vending technology for Fairmont businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fairmont-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fairmont-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function FairmontWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
