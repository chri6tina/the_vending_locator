import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Williston, North Dakota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Williston, North Dakota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Williston businesses.',
  keywords: 'haha coolers Williston, smart vending Williston North Dakota, grab and go cooler Williston, cashless vending Williston',
  openGraph: {
    title: 'Haha Smart Coolers in Williston, North Dakota',
    description: 'Revolutionary grab & go vending technology for Williston businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/williston-north-dakota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/williston-north-dakota',
  },
};

export default function WillistonNorthDakotaCoolerPageMetadata() {
  return <PageClient />;
}
