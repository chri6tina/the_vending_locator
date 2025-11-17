import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Taylor, Michigan | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Taylor, Michigan. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Taylor businesses.',
  keywords: 'haha coolers Taylor, smart vending Taylor Michigan, grab and go cooler Taylor, cashless vending Taylor',
  openGraph: {
    title: 'Haha Smart Coolers in Taylor, Michigan',
    description: 'Revolutionary grab & go vending technology for Taylor businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/taylor-michigan',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/taylor-michigan',
  },
};

export default function TaylorMichiganCoolerPageMetadata() {
  return <PageClient />;
}
