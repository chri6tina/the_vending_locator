import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in West Haven, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in West Haven, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for West Haven businesses.',
  keywords: 'haha coolers West Haven, smart vending West Haven Connecticut, grab and go cooler West Haven, cashless vending West Haven',
  openGraph: {
    title: 'Haha Smart Coolers in West Haven, Connecticut',
    description: 'Revolutionary grab & go vending technology for West Haven businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/west-haven-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/west-haven-connecticut',
  },
};

export default function WestHavenConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
