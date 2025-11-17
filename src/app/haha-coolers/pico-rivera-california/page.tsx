import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pico Rivera, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pico Rivera, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pico Rivera businesses.',
  keywords: 'haha coolers Pico Rivera, smart vending Pico Rivera California, grab and go cooler Pico Rivera, cashless vending Pico Rivera',
  openGraph: {
    title: 'Haha Smart Coolers in Pico Rivera, California',
    description: 'Revolutionary grab & go vending technology for Pico Rivera businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pico-rivera-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pico-rivera-california',
  },
};

export default function PicoRiveraCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
