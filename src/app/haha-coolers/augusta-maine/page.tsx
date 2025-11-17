import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Augusta, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Augusta, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Augusta businesses.',
  keywords: 'haha coolers Augusta, smart vending Augusta Maine, grab and go cooler Augusta, cashless vending Augusta',
  openGraph: {
    title: 'Haha Smart Coolers in Augusta, Maine',
    description: 'Revolutionary grab & go vending technology for Augusta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/augusta-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/augusta-maine',
  },
};

export default function AugustaMaineCoolerPageMetadata() {
  return <PageClient />;
}
