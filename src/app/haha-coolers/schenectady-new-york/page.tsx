import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Schenectady, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Schenectady, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Schenectady businesses.',
  keywords: 'haha coolers Schenectady, smart vending Schenectady New York, grab and go cooler Schenectady, cashless vending Schenectady',
  openGraph: {
    title: 'Haha Smart Coolers in Schenectady, New York',
    description: 'Revolutionary grab & go vending technology for Schenectady businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/schenectady-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/schenectady-new-york',
  },
};

export default function SchenectadyNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
