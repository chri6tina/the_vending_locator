import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bangor, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bangor, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bangor businesses.',
  keywords: 'haha coolers Bangor, smart vending Bangor Maine, grab and go cooler Bangor, cashless vending Bangor',
  openGraph: {
    title: 'Haha Smart Coolers in Bangor, Maine',
    description: 'Revolutionary grab & go vending technology for Bangor businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bangor-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bangor-maine',
  },
};

export default function BangorMaineCoolerPageMetadata() {
  return <PageClient />;
}
