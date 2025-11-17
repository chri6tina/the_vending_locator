import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Portland, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Portland, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Portland businesses.',
  keywords: 'haha coolers Portland, smart vending Portland Maine, grab and go cooler Portland, cashless vending Portland',
  openGraph: {
    title: 'Haha Smart Coolers in Portland, Maine',
    description: 'Revolutionary grab & go vending technology for Portland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/portland-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/portland-maine',
  },
};

export default function PortlandMaineCoolerPageMetadata() {
  return <PageClient />;
}
