import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Las Cruces, New Mexico | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Las Cruces, New Mexico. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Las Cruces businesses.',
  keywords: 'haha coolers Las Cruces, smart vending Las Cruces New Mexico, grab and go cooler Las Cruces, cashless vending Las Cruces',
  openGraph: {
    title: 'Haha Smart Coolers in Las Cruces, New Mexico',
    description: 'Revolutionary grab & go vending technology for Las Cruces businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/las-cruces-new-mexico',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/las-cruces-new-mexico',
  },
};

export default function LasCrucesNewMexicoCoolerPageMetadata() {
  return <PageClient />;
}
