import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Baltimore, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Baltimore, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Baltimore businesses.',
  keywords: 'haha coolers Baltimore, smart vending Baltimore Maryland, grab and go cooler Baltimore, cashless vending Baltimore',
  openGraph: {
    title: 'Haha Smart Coolers in Baltimore, Maryland',
    description: 'Revolutionary grab & go vending technology for Baltimore businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/baltimore-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/baltimore-maryland',
  },
};

export default function BaltimoreMarylandCoolerPageMetadata() {
  return <PageClient />;
}
