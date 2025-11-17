import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Wahpeton, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Wahpeton, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Wahpeton businesses.',
  keywords: 'haha coolers Wahpeton, smart vending Wahpeton North Dakota, grab and go cooler Wahpeton, cashless vending Wahpeton',
  openGraph: {
    title: 'Haha Smart Coolers in Wahpeton, North Dakota',
    description: 'Revolutionary grab & go vending technology for Wahpeton businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/wahpeton-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/wahpeton-north-dakota',
  },
};

export default function WahpetonNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
