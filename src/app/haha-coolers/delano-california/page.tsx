import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Delano, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Delano, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Delano businesses.',
  keywords: 'haha coolers Delano, smart vending Delano California, grab and go cooler Delano, cashless vending Delano',
  openGraph: {
    title: 'Haha Smart Coolers in Delano, California',
    description: 'Revolutionary grab & go vending technology for Delano businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/delano-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/delano-california',
  },
};

export default function DelanoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
