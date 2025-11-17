import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Plymouth, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Plymouth, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Plymouth businesses.',
  keywords: 'haha coolers Plymouth, smart vending Plymouth Minnesota, grab and go cooler Plymouth, cashless vending Plymouth',
  openGraph: {
    title: 'Haha Smart Coolers in Plymouth, Minnesota',
    description: 'Revolutionary grab & go vending technology for Plymouth businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/plymouth-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/plymouth-minnesota',
  },
};

export default function PlymouthMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
