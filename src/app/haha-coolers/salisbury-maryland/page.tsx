import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salisbury, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salisbury, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salisbury businesses.',
  keywords: 'haha coolers Salisbury, smart vending Salisbury Maryland, grab and go cooler Salisbury, cashless vending Salisbury',
  openGraph: {
    title: 'Haha Smart Coolers in Salisbury, Maryland',
    description: 'Revolutionary grab & go vending technology for Salisbury businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salisbury-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salisbury-maryland',
  },
};

export default function SalisburyMarylandCoolerPageMetadata() {
  return <PageClient />;
}
