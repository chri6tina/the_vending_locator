import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Walnut Creek, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Walnut Creek, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Walnut Creek businesses.',
  keywords: 'haha coolers Walnut Creek, smart vending Walnut Creek California, grab and go cooler Walnut Creek, cashless vending Walnut Creek',
  openGraph: {
    title: 'Haha Smart Coolers in Walnut Creek, California',
    description: 'Revolutionary grab & go vending technology for Walnut Creek businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/walnut-creek-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/walnut-creek-california',
  },
};

export default function WalnutCreekCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
