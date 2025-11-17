import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Carson City, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Carson City, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Carson City businesses.',
  keywords: 'haha coolers Carson City, smart vending Carson City Nevada, grab and go cooler Carson City, cashless vending Carson City',
  openGraph: {
    title: 'Haha Smart Coolers in Carson City, Nevada',
    description: 'Revolutionary grab & go vending technology for Carson City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/carson-city-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/carson-city-nevada',
  },
};

export default function CarsonCityNevadaCoolerPageMetadata() {
  return <PageClient />;
}
