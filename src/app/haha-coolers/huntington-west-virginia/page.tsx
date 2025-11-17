import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Huntington, West Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Huntington, West Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Huntington businesses.',
  keywords: 'haha coolers Huntington, smart vending Huntington West Virginia, grab and go cooler Huntington, cashless vending Huntington',
  openGraph: {
    title: 'Haha Smart Coolers in Huntington, West Virginia',
    description: 'Revolutionary grab & go vending technology for Huntington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/huntington-west-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/huntington-west-virginia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HuntingtonWestVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
