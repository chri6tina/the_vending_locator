import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Schaumburg, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Schaumburg, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Schaumburg businesses.',
  keywords: 'haha coolers Schaumburg, smart vending Schaumburg Illinois, grab and go cooler Schaumburg, cashless vending Schaumburg',
  openGraph: {
    title: 'Haha Smart Coolers in Schaumburg, Illinois',
    description: 'Revolutionary grab & go vending technology for Schaumburg businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/schaumburg-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/schaumburg-illinois',
  },
};

export default function SchaumburgIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
