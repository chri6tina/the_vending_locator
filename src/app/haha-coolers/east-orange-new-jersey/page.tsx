import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in East Orange, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in East Orange, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for East Orange businesses.',
  keywords: 'haha coolers East Orange, smart vending East Orange New Jersey, grab and go cooler East Orange, cashless vending East Orange',
  openGraph: {
    title: 'Haha Smart Coolers in East Orange, New Jersey',
    description: 'Revolutionary grab & go vending technology for East Orange businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/east-orange-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/east-orange-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function EastOrangeNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
