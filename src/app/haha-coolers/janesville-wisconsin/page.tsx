import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Janesville, Wisconsin | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Janesville, Wisconsin. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Janesville businesses.',
  keywords: 'haha coolers Janesville, smart vending Janesville Wisconsin, grab and go cooler Janesville, cashless vending Janesville',
  openGraph: {
    title: 'Haha Smart Coolers in Janesville, Wisconsin',
    description: 'Revolutionary grab & go vending technology for Janesville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/janesville-wisconsin',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/janesville-wisconsin',
  },
};

export default function JanesvilleWisconsinCoolerPageMetadata() {
  return <PageClient />;
}
