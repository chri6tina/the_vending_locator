import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West New York, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West New York, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West New York businesses.',
  keywords: 'haha coolers West New York, smart vending West New York New Jersey, grab and go cooler West New York, cashless vending West New York',
  openGraph: {
    title: 'Haha Smart Coolers in West New York, New Jersey',
    description: 'Revolutionary grab & go vending technology for West New York businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-new-york-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-new-york-new-jersey',
  },
};

export default function WestNewYorkNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
