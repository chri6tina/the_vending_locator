import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Yucca Valley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Yucca Valley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Yucca Valley businesses.',
  keywords: 'haha coolers Yucca Valley, smart vending Yucca Valley California, grab and go cooler Yucca Valley, cashless vending Yucca Valley',
  openGraph: {
    title: 'Haha Smart Coolers in Yucca Valley, California',
    description: 'Revolutionary grab & go vending technology for Yucca Valley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/yucca-valley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/yucca-valley-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function YuccaValleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
