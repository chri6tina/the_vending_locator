import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rome, New York | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rome, New York. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rome businesses.',
  keywords: 'haha coolers Rome, smart vending Rome New York, grab and go cooler Rome, cashless vending Rome',
  openGraph: {
    title: 'Haha Smart Coolers in Rome, New York',
    description: 'Revolutionary grab & go vending technology for Rome businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rome-new-york',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rome-new-york',
  },
};

export default function RomeNewYorkCoolerPageMetadata() {
  return <PageClient />;
}
