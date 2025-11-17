import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wheaton, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wheaton, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wheaton businesses.',
  keywords: 'haha coolers Wheaton, smart vending Wheaton Illinois, grab and go cooler Wheaton, cashless vending Wheaton',
  openGraph: {
    title: 'Haha Smart Coolers in Wheaton, Illinois',
    description: 'Revolutionary grab & go vending technology for Wheaton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wheaton-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wheaton-illinois',
  },
};

export default function WheatonIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
