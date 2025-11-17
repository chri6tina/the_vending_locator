import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Auburn, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Auburn, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Auburn businesses.',
  keywords: 'haha coolers Auburn, smart vending Auburn Maine, grab and go cooler Auburn, cashless vending Auburn',
  openGraph: {
    title: 'Haha Smart Coolers in Auburn, Maine',
    description: 'Revolutionary grab & go vending technology for Auburn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/auburn-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/auburn-maine',
  },
};

export default function AuburnMaineCoolerPageMetadata() {
  return <PageClient />;
}
