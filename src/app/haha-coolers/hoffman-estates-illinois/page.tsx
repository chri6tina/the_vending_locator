import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hoffman Estates, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hoffman Estates, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hoffman Estates businesses.',
  keywords: 'haha coolers Hoffman Estates, smart vending Hoffman Estates Illinois, grab and go cooler Hoffman Estates, cashless vending Hoffman Estates',
  openGraph: {
    title: 'Haha Smart Coolers in Hoffman Estates, Illinois',
    description: 'Revolutionary grab & go vending technology for Hoffman Estates businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hoffman-estates-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hoffman-estates-illinois',
  },
};

export default function HoffmanEstatesIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
