import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coral Springs, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coral Springs, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coral Springs businesses.',
  keywords: 'haha coolers Coral Springs, smart vending Coral Springs Florida, grab and go cooler Coral Springs, cashless vending Coral Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Coral Springs, Florida',
    description: 'Revolutionary grab & go vending technology for Coral Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coral-springs-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coral-springs-florida',
  },
};

export default function CoralSpringsFloridaCoolerPageMetadata() {
  return <PageClient />;
}
