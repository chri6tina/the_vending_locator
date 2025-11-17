import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Riverside, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Riverside, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Riverside businesses.',
  keywords: 'haha coolers Riverside, smart vending Riverside California, grab and go cooler Riverside, cashless vending Riverside',
  openGraph: {
    title: 'Haha Smart Coolers in Riverside, California',
    description: 'Revolutionary grab & go vending technology for Riverside businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/riverside-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/riverside-california',
  },
};

export default function RiversideCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
