import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Rochelle, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Rochelle, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Rochelle businesses.',
  keywords: 'haha coolers New Rochelle, smart vending New Rochelle New York, grab and go cooler New Rochelle, cashless vending New Rochelle',
  openGraph: {
    title: 'Haha Smart Coolers in New Rochelle, New York',
    description: 'Revolutionary grab & go vending technology for New Rochelle businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-rochelle-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-rochelle-new-york',
  },
};

export default function NewRochelleNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
