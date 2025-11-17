import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Clearwater, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Clearwater, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Clearwater businesses.',
  keywords: 'haha coolers Clearwater, smart vending Clearwater Florida, grab and go cooler Clearwater, cashless vending Clearwater',
  openGraph: {
    title: 'Haha Smart Coolers in Clearwater, Florida',
    description: 'Revolutionary grab & go vending technology for Clearwater businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/clearwater-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/clearwater-florida',
  },
};

export default function ClearwaterFloridaCoolerPageMetadata() {
  return <PageClient />;
}
