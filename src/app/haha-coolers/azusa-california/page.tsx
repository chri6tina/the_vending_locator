import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Azusa, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Azusa, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Azusa businesses.',
  keywords: 'haha coolers Azusa, smart vending Azusa California, grab and go cooler Azusa, cashless vending Azusa',
  openGraph: {
    title: 'Haha Smart Coolers in Azusa, California',
    description: 'Revolutionary grab & go vending technology for Azusa businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/azusa-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/azusa-california',
  },
};

export default function AzusaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
