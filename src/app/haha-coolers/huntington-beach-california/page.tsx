import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Huntington Beach, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Huntington Beach, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Huntington Beach businesses.',
  keywords: 'haha coolers Huntington Beach, smart vending Huntington Beach California, grab and go cooler Huntington Beach, cashless vending Huntington Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Huntington Beach, California',
    description: 'Revolutionary grab & go vending technology for Huntington Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/huntington-beach-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/huntington-beach-california',
  },
};

export default function HuntingtonBeachCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
