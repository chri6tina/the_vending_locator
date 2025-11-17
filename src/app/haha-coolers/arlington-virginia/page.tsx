import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arlington, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arlington, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arlington businesses.',
  keywords: 'haha coolers Arlington, smart vending Arlington Virginia, grab and go cooler Arlington, cashless vending Arlington',
  openGraph: {
    title: 'Haha Smart Coolers in Arlington, Virginia',
    description: 'Revolutionary grab & go vending technology for Arlington businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arlington-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arlington-virginia',
  },
};

export default function ArlingtonVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
