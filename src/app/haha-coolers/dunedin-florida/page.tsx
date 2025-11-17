import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Dunedin, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Dunedin, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Dunedin businesses.',
  keywords: 'haha coolers Dunedin, smart vending Dunedin Florida, grab and go cooler Dunedin, cashless vending Dunedin',
  openGraph: {
    title: 'Haha Smart Coolers in Dunedin, Florida',
    description: 'Revolutionary grab & go vending technology for Dunedin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/dunedin-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/dunedin-florida',
  },
};

export default function DunedinFloridaCoolerPageMetadata() {
  return <PageClient />;
}
