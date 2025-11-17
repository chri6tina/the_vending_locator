import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Walnut, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Walnut, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Walnut businesses.',
  keywords: 'haha coolers Walnut, smart vending Walnut California, grab and go cooler Walnut, cashless vending Walnut',
  openGraph: {
    title: 'Haha Smart Coolers in Walnut, California',
    description: 'Revolutionary grab & go vending technology for Walnut businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/walnut-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/walnut-california',
  },
};

export default function WalnutCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
