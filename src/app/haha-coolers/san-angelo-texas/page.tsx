import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Angelo, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Angelo, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Angelo businesses.',
  keywords: 'haha coolers San Angelo, smart vending San Angelo Texas, grab and go cooler San Angelo, cashless vending San Angelo',
  openGraph: {
    title: 'Haha Smart Coolers in San Angelo, Texas',
    description: 'Revolutionary grab & go vending technology for San Angelo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-angelo-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-angelo-texas',
  },
};

export default function SanAngeloTexasCoolerPageMetadata() {
  return <PageClient />;
}
