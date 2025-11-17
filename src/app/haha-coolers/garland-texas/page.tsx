import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Garland, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Garland, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Garland businesses.',
  keywords: 'haha coolers Garland, smart vending Garland Texas, grab and go cooler Garland, cashless vending Garland',
  openGraph: {
    title: 'Haha Smart Coolers in Garland, Texas',
    description: 'Revolutionary grab & go vending technology for Garland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/garland-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/garland-texas',
  },
};

export default function GarlandTexasCoolerPageMetadata() {
  return <PageClient />;
}
