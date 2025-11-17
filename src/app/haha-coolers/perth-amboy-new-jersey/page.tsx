import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Perth Amboy, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Perth Amboy, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Perth Amboy businesses.',
  keywords: 'haha coolers Perth Amboy, smart vending Perth Amboy New Jersey, grab and go cooler Perth Amboy, cashless vending Perth Amboy',
  openGraph: {
    title: 'Haha Smart Coolers in Perth Amboy, New Jersey',
    description: 'Revolutionary grab & go vending technology for Perth Amboy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/perth-amboy-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/perth-amboy-new-jersey',
  },
};

export default function PerthAmboyNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
