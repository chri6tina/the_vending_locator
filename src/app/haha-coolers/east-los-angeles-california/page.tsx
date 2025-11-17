import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in East Los Angeles, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in East Los Angeles, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for East Los Angeles businesses.',
  keywords: 'haha coolers East Los Angeles, smart vending East Los Angeles California, grab and go cooler East Los Angeles, cashless vending East Los Angeles',
  openGraph: {
    title: 'Haha Smart Coolers in East Los Angeles, California',
    description: 'Revolutionary grab & go vending technology for East Los Angeles businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/east-los-angeles-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/east-los-angeles-california',
  },
};

export default function EastLosAngelesCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
