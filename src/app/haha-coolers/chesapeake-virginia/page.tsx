import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chesapeake, Virginia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chesapeake, Virginia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chesapeake businesses.',
  keywords: 'haha coolers Chesapeake, smart vending Chesapeake Virginia, grab and go cooler Chesapeake, cashless vending Chesapeake',
  openGraph: {
    title: 'Haha Smart Coolers in Chesapeake, Virginia',
    description: 'Revolutionary grab & go vending technology for Chesapeake businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chesapeake-virginia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chesapeake-virginia',
  },
};

export default function ChesapeakeVirginiaCoolerPageMetadata() {
  return <PageClient />;
}
