import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Moreno Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Moreno Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Moreno Valley businesses.',
  keywords: 'haha coolers Moreno Valley, smart vending Moreno Valley California, grab and go cooler Moreno Valley, cashless vending Moreno Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Moreno Valley, California',
    description: 'Revolutionary grab & go vending technology for Moreno Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/moreno-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/moreno-valley-california',
  },
};

export default function MorenoValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
