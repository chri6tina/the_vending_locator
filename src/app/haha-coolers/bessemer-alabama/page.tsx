import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bessemer, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bessemer, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bessemer businesses.',
  keywords: 'haha coolers Bessemer, smart vending Bessemer Alabama, grab and go cooler Bessemer, cashless vending Bessemer',
  openGraph: {
    title: 'Haha Smart Coolers in Bessemer, Alabama',
    description: 'Revolutionary grab & go vending technology for Bessemer businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bessemer-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bessemer-alabama',
  },
};

export default function BessemerAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
