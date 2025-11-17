import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Diamond Bar, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Diamond Bar, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Diamond Bar businesses.',
  keywords: 'haha coolers Diamond Bar, smart vending Diamond Bar California, grab and go cooler Diamond Bar, cashless vending Diamond Bar',
  openGraph: {
    title: 'Haha Smart Coolers in Diamond Bar, California',
    description: 'Revolutionary grab & go vending technology for Diamond Bar businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/diamond-bar-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/diamond-bar-california',
  },
};

export default function DiamondBarCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
