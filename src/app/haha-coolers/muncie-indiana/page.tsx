import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Muncie, Indiana | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Muncie, Indiana. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Muncie businesses.',
  keywords: 'haha coolers Muncie, smart vending Muncie Indiana, grab and go cooler Muncie, cashless vending Muncie',
  openGraph: {
    title: 'Haha Smart Coolers in Muncie, Indiana',
    description: 'Revolutionary grab & go vending technology for Muncie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/muncie-indiana',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/muncie-indiana',
  },
};

export default function MuncieIndianaCoolerPageMetadata() {
  return <PageClient />;
}
