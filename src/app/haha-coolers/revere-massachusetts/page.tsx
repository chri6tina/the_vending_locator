import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Revere, Massachusetts | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Revere, Massachusetts. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Revere businesses.',
  keywords: 'haha coolers Revere, smart vending Revere Massachusetts, grab and go cooler Revere, cashless vending Revere',
  openGraph: {
    title: 'Haha Smart Coolers in Revere, Massachusetts',
    description: 'Revolutionary grab & go vending technology for Revere businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/revere-massachusetts',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/revere-massachusetts',
  },
};

export default function RevereMassachusettsCoolerPageMetadata() {
  return <PageClient />;
}
