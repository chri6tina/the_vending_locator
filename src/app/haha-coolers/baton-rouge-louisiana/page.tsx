import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Baton Rouge, Louisiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Baton Rouge, Louisiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Baton Rouge businesses.',
  keywords: 'haha coolers Baton Rouge, smart vending Baton Rouge Louisiana, grab and go cooler Baton Rouge, cashless vending Baton Rouge',
  openGraph: {
    title: 'Haha Smart Coolers in Baton Rouge, Louisiana',
    description: 'Revolutionary grab & go vending technology for Baton Rouge businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/baton-rouge-louisiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/baton-rouge-louisiana',
  },
};

export default function BatonRougeLouisianaCoolerPageMetadata() {
  return <PageClient />;
}
