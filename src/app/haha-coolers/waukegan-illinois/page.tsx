import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Waukegan, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Waukegan, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Waukegan businesses.',
  keywords: 'haha coolers Waukegan, smart vending Waukegan Illinois, grab and go cooler Waukegan, cashless vending Waukegan',
  openGraph: {
    title: 'Haha Smart Coolers in Waukegan, Illinois',
    description: 'Revolutionary grab & go vending technology for Waukegan businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/waukegan-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/waukegan-illinois',
  },
};

export default function WaukeganIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
