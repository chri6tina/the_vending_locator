import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tupelo, Mississippi | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tupelo, Mississippi. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tupelo businesses.',
  keywords: 'haha coolers Tupelo, smart vending Tupelo Mississippi, grab and go cooler Tupelo, cashless vending Tupelo',
  openGraph: {
    title: 'Haha Smart Coolers in Tupelo, Mississippi',
    description: 'Revolutionary grab & go vending technology for Tupelo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tupelo-mississippi',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tupelo-mississippi',
  },
};

export default function TupeloMississippiCoolerPageMetadata() {
  return <PageClient />;
}
