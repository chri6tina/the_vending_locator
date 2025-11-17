import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Antonio, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Antonio, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Antonio businesses.',
  keywords: 'haha coolers San Antonio, smart vending San Antonio Texas, grab and go cooler San Antonio, cashless vending San Antonio',
  openGraph: {
    title: 'Haha Smart Coolers in San Antonio, Texas',
    description: 'Revolutionary grab & go vending technology for San Antonio businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-antonio-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-antonio-texas',
  },
};

export default function SanAntonioTexasCoolerPageMetadata() {
  return <PageClient />;
}
