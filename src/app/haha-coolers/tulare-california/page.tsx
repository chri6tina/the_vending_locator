import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tulare, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tulare, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tulare businesses.',
  keywords: 'haha coolers Tulare, smart vending Tulare California, grab and go cooler Tulare, cashless vending Tulare',
  openGraph: {
    title: 'Haha Smart Coolers in Tulare, California',
    description: 'Revolutionary grab & go vending technology for Tulare businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tulare-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tulare-california',
  },
};

export default function TulareCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
