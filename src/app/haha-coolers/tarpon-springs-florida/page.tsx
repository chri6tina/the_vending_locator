import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tarpon Springs, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tarpon Springs, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tarpon Springs businesses.',
  keywords: 'haha coolers Tarpon Springs, smart vending Tarpon Springs Florida, grab and go cooler Tarpon Springs, cashless vending Tarpon Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Tarpon Springs, Florida',
    description: 'Revolutionary grab & go vending technology for Tarpon Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tarpon-springs-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tarpon-springs-florida',
  },
};

export default function TarponSpringsFloridaCoolerPageMetadata() {
  return <PageClient />;
}
