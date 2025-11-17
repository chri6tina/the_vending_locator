import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Plainfield, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Plainfield, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Plainfield businesses.',
  keywords: 'haha coolers Plainfield, smart vending Plainfield New Jersey, grab and go cooler Plainfield, cashless vending Plainfield',
  openGraph: {
    title: 'Haha Smart Coolers in Plainfield, New Jersey',
    description: 'Revolutionary grab & go vending technology for Plainfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/plainfield-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/plainfield-new-jersey',
  },
};

export default function PlainfieldNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
