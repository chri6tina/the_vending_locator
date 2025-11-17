import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Poway, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Poway, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Poway businesses.',
  keywords: 'haha coolers Poway, smart vending Poway California, grab and go cooler Poway, cashless vending Poway',
  openGraph: {
    title: 'Haha Smart Coolers in Poway, California',
    description: 'Revolutionary grab & go vending technology for Poway businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/poway-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/poway-california',
  },
};

export default function PowayCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
