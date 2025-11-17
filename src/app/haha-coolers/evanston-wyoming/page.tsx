import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Evanston, Wyoming | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Evanston, Wyoming. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Evanston businesses.',
  keywords: 'haha coolers Evanston, smart vending Evanston Wyoming, grab and go cooler Evanston, cashless vending Evanston',
  openGraph: {
    title: 'Haha Smart Coolers in Evanston, Wyoming',
    description: 'Revolutionary grab & go vending technology for Evanston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/evanston-wyoming',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/evanston-wyoming',
  },
};

export default function EvanstonWyomingCoolerPageMetadata() {
  return <PageClient />;
}
