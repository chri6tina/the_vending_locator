import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rochester, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rochester, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rochester businesses.',
  keywords: 'haha coolers Rochester, smart vending Rochester New Hampshire, grab and go cooler Rochester, cashless vending Rochester',
  openGraph: {
    title: 'Haha Smart Coolers in Rochester, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Rochester businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rochester-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rochester-new-hampshire',
  },
};

export default function RochesterNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
