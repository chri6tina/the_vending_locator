import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chicago, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chicago, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chicago businesses.',
  keywords: 'haha coolers Chicago, smart vending Chicago Illinois, grab and go cooler Chicago, cashless vending Chicago',
  openGraph: {
    title: 'Haha Smart Coolers in Chicago, Illinois',
    description: 'Revolutionary grab & go vending technology for Chicago businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chicago-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chicago-illinois',
  },
};

export default function ChicagoIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
