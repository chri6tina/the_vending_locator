import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Poughkeepsie, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Poughkeepsie, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Poughkeepsie businesses.',
  keywords: 'haha coolers Poughkeepsie, smart vending Poughkeepsie New York, grab and go cooler Poughkeepsie, cashless vending Poughkeepsie',
  openGraph: {
    title: 'Haha Smart Coolers in Poughkeepsie, New York',
    description: 'Revolutionary grab & go vending technology for Poughkeepsie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/poughkeepsie-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/poughkeepsie-new-york',
  },
};

export default function PoughkeepsieNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
