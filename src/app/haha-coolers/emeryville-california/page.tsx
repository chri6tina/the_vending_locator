import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Emeryville, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Emeryville, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Emeryville businesses.',
  keywords: 'haha coolers Emeryville, smart vending Emeryville California, grab and go cooler Emeryville, cashless vending Emeryville',
  openGraph: {
    title: 'Haha Smart Coolers in Emeryville, California',
    description: 'Revolutionary grab & go vending technology for Emeryville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/emeryville-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/emeryville-california',
  },
};

export default function EmeryvilleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
