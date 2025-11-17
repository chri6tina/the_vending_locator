import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dodge City, Kansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dodge City, Kansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dodge City businesses.',
  keywords: 'haha coolers Dodge City, smart vending Dodge City Kansas, grab and go cooler Dodge City, cashless vending Dodge City',
  openGraph: {
    title: 'Haha Smart Coolers in Dodge City, Kansas',
    description: 'Revolutionary grab & go vending technology for Dodge City businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dodge-city-kansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dodge-city-kansas',
  },
};

export default function DodgeCityKansasCoolerPageMetadata() {
  return <PageClient />;
}
