import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Homer, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Homer, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Homer businesses.',
  keywords: 'haha coolers Homer, smart vending Homer Alaska, grab and go cooler Homer, cashless vending Homer',
  openGraph: {
    title: 'Haha Smart Coolers in Homer, Alaska',
    description: 'Revolutionary grab & go vending technology for Homer businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/homer-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/homer-alaska',
  },
};

export default function HomerAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
