import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lodi, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lodi, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lodi businesses.',
  keywords: 'haha coolers Lodi, smart vending Lodi California, grab and go cooler Lodi, cashless vending Lodi',
  openGraph: {
    title: 'Haha Smart Coolers in Lodi, California',
    description: 'Revolutionary grab & go vending technology for Lodi businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lodi-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lodi-california',
  },
};

export default function LodiCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
