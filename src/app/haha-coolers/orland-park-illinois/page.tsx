import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Orland Park, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Orland Park, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Orland Park businesses.',
  keywords: 'haha coolers Orland Park, smart vending Orland Park Illinois, grab and go cooler Orland Park, cashless vending Orland Park',
  openGraph: {
    title: 'Haha Smart Coolers in Orland Park, Illinois',
    description: 'Revolutionary grab & go vending technology for Orland Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/orland-park-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/orland-park-illinois',
  },
};

export default function OrlandParkIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
