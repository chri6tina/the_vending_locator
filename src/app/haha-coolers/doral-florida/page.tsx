import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Doral, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Doral, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Doral businesses.',
  keywords: 'haha coolers Doral, smart vending Doral Florida, grab and go cooler Doral, cashless vending Doral',
  openGraph: {
    title: 'Haha Smart Coolers in Doral, Florida',
    description: 'Revolutionary grab & go vending technology for Doral businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/doral-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/doral-florida',
  },
};

export default function DoralFloridaCoolerPageMetadata() {
  return <PageClient />;
}
