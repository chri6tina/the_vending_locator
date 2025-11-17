import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Orange, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Orange, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Orange businesses.',
  keywords: 'haha coolers Orange, smart vending Orange California, grab and go cooler Orange, cashless vending Orange',
  openGraph: {
    title: 'Haha Smart Coolers in Orange, California',
    description: 'Revolutionary grab & go vending technology for Orange businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/orange-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/orange-california',
  },
};

export default function OrangeCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
