import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Laurel, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Laurel, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Laurel businesses.',
  keywords: 'haha coolers Laurel, smart vending Laurel Maryland, grab and go cooler Laurel, cashless vending Laurel',
  openGraph: {
    title: 'Haha Smart Coolers in Laurel, Maryland',
    description: 'Revolutionary grab & go vending technology for Laurel businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/laurel-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/laurel-maryland',
  },
};

export default function LaurelMarylandCoolerPageMetadata() {
  return <PageClient />;
}
