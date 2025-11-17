import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Conroe, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Conroe, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Conroe businesses.',
  keywords: 'haha coolers Conroe, smart vending Conroe Texas, grab and go cooler Conroe, cashless vending Conroe',
  openGraph: {
    title: 'Haha Smart Coolers in Conroe, Texas',
    description: 'Revolutionary grab & go vending technology for Conroe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/conroe-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/conroe-texas',
  },
};

export default function ConroeTexasCoolerPageMetadata() {
  return <PageClient />;
}
