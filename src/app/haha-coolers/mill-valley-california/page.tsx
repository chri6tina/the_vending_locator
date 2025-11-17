import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mill Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mill Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mill Valley businesses.',
  keywords: 'haha coolers Mill Valley, smart vending Mill Valley California, grab and go cooler Mill Valley, cashless vending Mill Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Mill Valley, California',
    description: 'Revolutionary grab & go vending technology for Mill Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mill-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mill-valley-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MillValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
