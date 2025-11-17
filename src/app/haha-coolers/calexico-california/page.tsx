import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Calexico, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Calexico, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Calexico businesses.',
  keywords: 'haha coolers Calexico, smart vending Calexico California, grab and go cooler Calexico, cashless vending Calexico',
  openGraph: {
    title: 'Haha Smart Coolers in Calexico, California',
    description: 'Revolutionary grab & go vending technology for Calexico businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/calexico-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/calexico-california',
  },
};

export default function CalexicoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
