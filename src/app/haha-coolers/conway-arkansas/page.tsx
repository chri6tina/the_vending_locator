import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Conway, Arkansas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Conway, Arkansas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Conway businesses.',
  keywords: 'haha coolers Conway, smart vending Conway Arkansas, grab and go cooler Conway, cashless vending Conway',
  openGraph: {
    title: 'Haha Smart Coolers in Conway, Arkansas',
    description: 'Revolutionary grab & go vending technology for Conway businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/conway-arkansas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/conway-arkansas',
  },
};

export default function ConwayArkansasCoolerPageMetadata() {
  return <PageClient />;
}
