import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hot Springs, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hot Springs, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hot Springs businesses.',
  keywords: 'haha coolers Hot Springs, smart vending Hot Springs Arkansas, grab and go cooler Hot Springs, cashless vending Hot Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Hot Springs, Arkansas',
    description: 'Revolutionary grab & go vending technology for Hot Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hot-springs-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hot-springs-arkansas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HotSpringsArkansasCoolerPageMetadata() {
  return <PageClient />;
}
