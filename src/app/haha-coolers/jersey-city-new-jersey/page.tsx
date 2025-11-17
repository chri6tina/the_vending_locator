import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jersey City, New Jersey | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jersey City, New Jersey. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jersey City businesses.',
  keywords: 'haha coolers Jersey City, smart vending Jersey City New Jersey, grab and go cooler Jersey City, cashless vending Jersey City',
  openGraph: {
    title: 'Haha Smart Coolers in Jersey City, New Jersey',
    description: 'Revolutionary grab & go vending technology for Jersey City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jersey-city-new-jersey',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jersey-city-new-jersey',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JerseyCityNewJerseyCoolerPageMetadata() {
  return <PageClient />;
}
