import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bartlett, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bartlett, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bartlett businesses.',
  keywords: 'haha coolers Bartlett, smart vending Bartlett Tennessee, grab and go cooler Bartlett, cashless vending Bartlett',
  openGraph: {
    title: 'Haha Smart Coolers in Bartlett, Tennessee',
    description: 'Revolutionary grab & go vending technology for Bartlett businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bartlett-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bartlett-tennessee',
  },
};

export default function BartlettTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
