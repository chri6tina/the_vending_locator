import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Berwyn, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Berwyn, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Berwyn businesses.',
  keywords: 'haha coolers Berwyn, smart vending Berwyn Illinois, grab and go cooler Berwyn, cashless vending Berwyn',
  openGraph: {
    title: 'Haha Smart Coolers in Berwyn, Illinois',
    description: 'Revolutionary grab & go vending technology for Berwyn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/berwyn-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/berwyn-illinois',
  },
};

export default function BerwynIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
