import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wheeling, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wheeling, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wheeling businesses.',
  keywords: 'haha coolers Wheeling, smart vending Wheeling West Virginia, grab and go cooler Wheeling, cashless vending Wheeling',
  openGraph: {
    title: 'Haha Smart Coolers in Wheeling, West Virginia',
    description: 'Revolutionary grab & go vending technology for Wheeling businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wheeling-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wheeling-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function WheelingWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
