import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Fairfield, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Fairfield, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Fairfield businesses.',
  keywords: 'haha coolers Fairfield, smart vending Fairfield California, grab and go cooler Fairfield, cashless vending Fairfield',
  openGraph: {
    title: 'Haha Smart Coolers in Fairfield, California',
    description: 'Revolutionary grab & go vending technology for Fairfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/fairfield-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/fairfield-california',
  },
};

export default function FairfieldCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
