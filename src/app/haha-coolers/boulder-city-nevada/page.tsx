import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Boulder City, Nevada | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Boulder City, Nevada. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Boulder City businesses.',
  keywords: 'haha coolers Boulder City, smart vending Boulder City Nevada, grab and go cooler Boulder City, cashless vending Boulder City',
  openGraph: {
    title: 'Haha Smart Coolers in Boulder City, Nevada',
    description: 'Revolutionary grab & go vending technology for Boulder City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/boulder-city-nevada',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/boulder-city-nevada',
  },
};

export default function BoulderCityNevadaCoolerPageMetadata() {
  return <PageClient />;
}
