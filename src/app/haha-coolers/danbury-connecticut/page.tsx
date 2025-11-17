import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Danbury, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Danbury, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Danbury businesses.',
  keywords: 'haha coolers Danbury, smart vending Danbury Connecticut, grab and go cooler Danbury, cashless vending Danbury',
  openGraph: {
    title: 'Haha Smart Coolers in Danbury, Connecticut',
    description: 'Revolutionary grab & go vending technology for Danbury businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/danbury-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/danbury-connecticut',
  },
};

export default function DanburyConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
