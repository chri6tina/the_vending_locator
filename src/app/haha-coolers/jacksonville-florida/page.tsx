import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jacksonville, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jacksonville, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jacksonville businesses.',
  keywords: 'haha coolers Jacksonville, smart vending Jacksonville Florida, grab and go cooler Jacksonville, cashless vending Jacksonville',
  openGraph: {
    title: 'Haha Smart Coolers in Jacksonville, Florida',
    description: 'Revolutionary grab & go vending technology for Jacksonville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jacksonville-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jacksonville-florida',
  },
};

export default function JacksonvilleFloridaCoolerPageMetadata() {
  return <PageClient />;
}
