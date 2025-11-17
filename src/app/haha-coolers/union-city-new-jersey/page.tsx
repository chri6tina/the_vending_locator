import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Union City, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Union City, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Union City businesses.',
  keywords: 'haha coolers Union City, smart vending Union City New Jersey, grab and go cooler Union City, cashless vending Union City',
  openGraph: {
    title: 'Haha Smart Coolers in Union City, New Jersey',
    description: 'Revolutionary grab & go vending technology for Union City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/union-city-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/union-city-new-jersey',
  },
};

export default function UnionCityNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
