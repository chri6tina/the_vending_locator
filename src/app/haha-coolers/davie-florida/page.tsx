import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Davie, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Davie, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Davie businesses.',
  keywords: 'haha coolers Davie, smart vending Davie Florida, grab and go cooler Davie, cashless vending Davie',
  openGraph: {
    title: 'Haha Smart Coolers in Davie, Florida',
    description: 'Revolutionary grab & go vending technology for Davie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/davie-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/davie-florida',
  },
};

export default function DavieFloridaCoolerPageMetadata() {
  return <PageClient />;
}
