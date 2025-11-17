import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in New Haven, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in New Haven, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for New Haven businesses.',
  keywords: 'haha coolers New Haven, smart vending New Haven Connecticut, grab and go cooler New Haven, cashless vending New Haven',
  openGraph: {
    title: 'Haha Smart Coolers in New Haven, Connecticut',
    description: 'Revolutionary grab & go vending technology for New Haven businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/new-haven-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/new-haven-connecticut',
  },
};

export default function NewHavenConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
