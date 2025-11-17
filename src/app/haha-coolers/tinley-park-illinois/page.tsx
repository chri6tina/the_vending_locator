import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tinley Park, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tinley Park, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tinley Park businesses.',
  keywords: 'haha coolers Tinley Park, smart vending Tinley Park Illinois, grab and go cooler Tinley Park, cashless vending Tinley Park',
  openGraph: {
    title: 'Haha Smart Coolers in Tinley Park, Illinois',
    description: 'Revolutionary grab & go vending technology for Tinley Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tinley-park-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tinley-park-illinois',
  },
};

export default function TinleyParkIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
