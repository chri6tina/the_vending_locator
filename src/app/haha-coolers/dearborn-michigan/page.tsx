import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dearborn, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dearborn, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dearborn businesses.',
  keywords: 'haha coolers Dearborn, smart vending Dearborn Michigan, grab and go cooler Dearborn, cashless vending Dearborn',
  openGraph: {
    title: 'Haha Smart Coolers in Dearborn, Michigan',
    description: 'Revolutionary grab & go vending technology for Dearborn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dearborn-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dearborn-michigan',
  },
};

export default function DearbornMichiganCoolerPageMetadata() {
  return <PageClient />;
}
