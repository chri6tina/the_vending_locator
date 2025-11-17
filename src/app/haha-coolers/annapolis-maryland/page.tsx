import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Annapolis, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Annapolis, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Annapolis businesses.',
  keywords: 'haha coolers Annapolis, smart vending Annapolis Maryland, grab and go cooler Annapolis, cashless vending Annapolis',
  openGraph: {
    title: 'Haha Smart Coolers in Annapolis, Maryland',
    description: 'Revolutionary grab & go vending technology for Annapolis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/annapolis-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/annapolis-maryland',
  },
};

export default function AnnapolisMarylandCoolerPageMetadata() {
  return <PageClient />;
}
