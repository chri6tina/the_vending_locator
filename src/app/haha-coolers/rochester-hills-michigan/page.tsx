import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rochester Hills, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rochester Hills, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rochester Hills businesses.',
  keywords: 'haha coolers Rochester Hills, smart vending Rochester Hills Michigan, grab and go cooler Rochester Hills, cashless vending Rochester Hills',
  openGraph: {
    title: 'Haha Smart Coolers in Rochester Hills, Michigan',
    description: 'Revolutionary grab & go vending technology for Rochester Hills businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rochester-hills-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rochester-hills-michigan',
  },
};

export default function RochesterHillsMichiganCoolerPageMetadata() {
  return <PageClient />;
}
