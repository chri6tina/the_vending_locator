import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Roseville, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Roseville, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Roseville businesses.',
  keywords: 'haha coolers Roseville, smart vending Roseville California, grab and go cooler Roseville, cashless vending Roseville',
  openGraph: {
    title: 'Haha Smart Coolers in Roseville, California',
    description: 'Revolutionary grab & go vending technology for Roseville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/roseville-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/roseville-california',
  },
};

export default function RosevilleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
