import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Trenton, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Trenton, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Trenton businesses.',
  keywords: 'haha coolers Trenton, smart vending Trenton New Jersey, grab and go cooler Trenton, cashless vending Trenton',
  openGraph: {
    title: 'Haha Smart Coolers in Trenton, New Jersey',
    description: 'Revolutionary grab & go vending technology for Trenton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/trenton-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/trenton-new-jersey',
  },
};

export default function TrentonNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
