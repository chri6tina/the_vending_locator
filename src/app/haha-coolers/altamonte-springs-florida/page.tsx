import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Altamonte Springs, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Altamonte Springs, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Altamonte Springs businesses.',
  keywords: 'haha coolers Altamonte Springs, smart vending Altamonte Springs Florida, grab and go cooler Altamonte Springs, cashless vending Altamonte Springs',
  openGraph: {
    title: 'Haha Smart Coolers in Altamonte Springs, Florida',
    description: 'Revolutionary grab & go vending technology for Altamonte Springs businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/altamonte-springs-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/altamonte-springs-florida',
  },
};

export default function AltamonteSpringsFloridaCoolerPageMetadata() {
  return <PageClient />;
}
