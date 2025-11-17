import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bismarck, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bismarck, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bismarck businesses.',
  keywords: 'haha coolers Bismarck, smart vending Bismarck North Dakota, grab and go cooler Bismarck, cashless vending Bismarck',
  openGraph: {
    title: 'Haha Smart Coolers in Bismarck, North Dakota',
    description: 'Revolutionary grab & go vending technology for Bismarck businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bismarck-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bismarck-north-dakota',
  },
};

export default function BismarckNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
