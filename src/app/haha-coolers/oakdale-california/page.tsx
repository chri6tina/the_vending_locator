import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oakdale, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oakdale, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oakdale businesses.',
  keywords: 'haha coolers Oakdale, smart vending Oakdale California, grab and go cooler Oakdale, cashless vending Oakdale',
  openGraph: {
    title: 'Haha Smart Coolers in Oakdale, California',
    description: 'Revolutionary grab & go vending technology for Oakdale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oakdale-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oakdale-california',
  },
};

export default function OakdaleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
