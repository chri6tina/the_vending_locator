import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Orlando, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Orlando, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Orlando businesses.',
  keywords: 'haha coolers Orlando, smart vending Orlando Florida, grab and go cooler Orlando, cashless vending Orlando',
  openGraph: {
    title: 'Haha Smart Coolers in Orlando, Florida',
    description: 'Revolutionary grab & go vending technology for Orlando businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/orlando-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/orlando-florida',
  },
};

export default function OrlandoFloridaCoolerPageMetadata() {
  return <PageClient />;
}
