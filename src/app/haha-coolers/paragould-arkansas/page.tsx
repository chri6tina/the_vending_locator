import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Paragould, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Paragould, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Paragould businesses.',
  keywords: 'haha coolers Paragould, smart vending Paragould Arkansas, grab and go cooler Paragould, cashless vending Paragould',
  openGraph: {
    title: 'Haha Smart Coolers in Paragould, Arkansas',
    description: 'Revolutionary grab & go vending technology for Paragould businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/paragould-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/paragould-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ParagouldArkansasCoolerPageMetadata() {
  return <PageClient />;
}
