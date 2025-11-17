import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pontiac, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pontiac, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pontiac businesses.',
  keywords: 'haha coolers Pontiac, smart vending Pontiac Michigan, grab and go cooler Pontiac, cashless vending Pontiac',
  openGraph: {
    title: 'Haha Smart Coolers in Pontiac, Michigan',
    description: 'Revolutionary grab & go vending technology for Pontiac businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pontiac-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pontiac-michigan',
  },
};

export default function PontiacMichiganCoolerPageMetadata() {
  return <PageClient />;
}
