import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tallahassee, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tallahassee, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tallahassee businesses.',
  keywords: 'haha coolers Tallahassee, smart vending Tallahassee Florida, grab and go cooler Tallahassee, cashless vending Tallahassee',
  openGraph: {
    title: 'Haha Smart Coolers in Tallahassee, Florida',
    description: 'Revolutionary grab & go vending technology for Tallahassee businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tallahassee-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tallahassee-florida',
  },
};

export default function TallahasseeFloridaCoolerPageMetadata() {
  return <PageClient />;
}
