import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Panama City, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Panama City, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Panama City businesses.',
  keywords: 'haha coolers Panama City, smart vending Panama City Florida, grab and go cooler Panama City, cashless vending Panama City',
  openGraph: {
    title: 'Haha Smart Coolers in Panama City, Florida',
    description: 'Revolutionary grab & go vending technology for Panama City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/panama-city-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/panama-city-florida',
  },
};

export default function PanamaCityFloridaCoolerPageMetadata() {
  return <PageClient />;
}
