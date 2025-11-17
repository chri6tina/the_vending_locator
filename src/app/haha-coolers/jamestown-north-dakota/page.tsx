import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jamestown, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jamestown, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jamestown businesses.',
  keywords: 'haha coolers Jamestown, smart vending Jamestown North Dakota, grab and go cooler Jamestown, cashless vending Jamestown',
  openGraph: {
    title: 'Haha Smart Coolers in Jamestown, North Dakota',
    description: 'Revolutionary grab & go vending technology for Jamestown businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jamestown-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jamestown-north-dakota',
  },
};

export default function JamestownNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
