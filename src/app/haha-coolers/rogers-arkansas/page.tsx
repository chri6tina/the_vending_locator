import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rogers, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rogers, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rogers businesses.',
  keywords: 'haha coolers Rogers, smart vending Rogers Arkansas, grab and go cooler Rogers, cashless vending Rogers',
  openGraph: {
    title: 'Haha Smart Coolers in Rogers, Arkansas',
    description: 'Revolutionary grab & go vending technology for Rogers businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rogers-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rogers-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RogersArkansasCoolerPageMetadata() {
  return <PageClient />;
}
