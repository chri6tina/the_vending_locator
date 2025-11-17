import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hagerstown, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hagerstown, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hagerstown businesses.',
  keywords: 'haha coolers Hagerstown, smart vending Hagerstown Maryland, grab and go cooler Hagerstown, cashless vending Hagerstown',
  openGraph: {
    title: 'Haha Smart Coolers in Hagerstown, Maryland',
    description: 'Revolutionary grab & go vending technology for Hagerstown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hagerstown-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hagerstown-maryland',
  },
};

export default function HagerstownMarylandCoolerPageMetadata() {
  return <PageClient />;
}
