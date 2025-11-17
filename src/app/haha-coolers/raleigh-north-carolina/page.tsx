import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Raleigh, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Raleigh, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Raleigh businesses.',
  keywords: 'haha coolers Raleigh, smart vending Raleigh North Carolina, grab and go cooler Raleigh, cashless vending Raleigh',
  openGraph: {
    title: 'Haha Smart Coolers in Raleigh, North Carolina',
    description: 'Revolutionary grab & go vending technology for Raleigh businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/raleigh-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/raleigh-north-carolina',
  },
};

export default function RaleighNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
