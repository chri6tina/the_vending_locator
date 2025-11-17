import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Aberdeen, South Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Aberdeen, South Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Aberdeen businesses.',
  keywords: 'haha coolers Aberdeen, smart vending Aberdeen South Dakota, grab and go cooler Aberdeen, cashless vending Aberdeen',
  openGraph: {
    title: 'Haha Smart Coolers in Aberdeen, South Dakota',
    description: 'Revolutionary grab & go vending technology for Aberdeen businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/aberdeen-south-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/aberdeen-south-dakota',
  },
};

export default function AberdeenSouthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
