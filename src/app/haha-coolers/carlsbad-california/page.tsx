import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carlsbad, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carlsbad, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carlsbad businesses.',
  keywords: 'haha coolers Carlsbad, smart vending Carlsbad California, grab and go cooler Carlsbad, cashless vending Carlsbad',
  openGraph: {
    title: 'Haha Smart Coolers in Carlsbad, California',
    description: 'Revolutionary grab & go vending technology for Carlsbad businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carlsbad-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carlsbad-california',
  },
};

export default function CarlsbadCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
