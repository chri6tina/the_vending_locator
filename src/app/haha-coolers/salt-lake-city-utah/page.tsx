import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salt Lake City, Utah | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salt Lake City, Utah. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salt Lake City businesses.',
  keywords: 'haha coolers Salt Lake City, smart vending Salt Lake City Utah, grab and go cooler Salt Lake City, cashless vending Salt Lake City',
  openGraph: {
    title: 'Haha Smart Coolers in Salt Lake City, Utah',
    description: 'Revolutionary grab & go vending technology for Salt Lake City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salt-lake-city-utah',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salt-lake-city-utah',
  },
};

export default function SaltLakeCityUtahCoolerPageMetadata() {
  return <PageClient />;
}
