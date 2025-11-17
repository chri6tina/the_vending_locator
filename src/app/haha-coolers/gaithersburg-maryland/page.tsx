import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gaithersburg, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gaithersburg, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gaithersburg businesses.',
  keywords: 'haha coolers Gaithersburg, smart vending Gaithersburg Maryland, grab and go cooler Gaithersburg, cashless vending Gaithersburg',
  openGraph: {
    title: 'Haha Smart Coolers in Gaithersburg, Maryland',
    description: 'Revolutionary grab & go vending technology for Gaithersburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gaithersburg-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gaithersburg-maryland',
  },
};

export default function GaithersburgMarylandCoolerPageMetadata() {
  return <PageClient />;
}
