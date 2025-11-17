import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bentonville, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bentonville, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bentonville businesses.',
  keywords: 'haha coolers Bentonville, smart vending Bentonville Arkansas, grab and go cooler Bentonville, cashless vending Bentonville',
  openGraph: {
    title: 'Haha Smart Coolers in Bentonville, Arkansas',
    description: 'Revolutionary grab & go vending technology for Bentonville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bentonville-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bentonville-arkansas',
  },
};

export default function BentonvilleArkansasCoolerPageMetadata() {
  return <PageClient />;
}
