import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lakeland, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lakeland, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lakeland businesses.',
  keywords: 'haha coolers Lakeland, smart vending Lakeland Florida, grab and go cooler Lakeland, cashless vending Lakeland',
  openGraph: {
    title: 'Haha Smart Coolers in Lakeland, Florida',
    description: 'Revolutionary grab & go vending technology for Lakeland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lakeland-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lakeland-florida',
  },
};

export default function LakelandFloridaCoolerPageMetadata() {
  return <PageClient />;
}
