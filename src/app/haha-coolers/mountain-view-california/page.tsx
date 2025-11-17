import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mountain View, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mountain View, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mountain View businesses.',
  keywords: 'haha coolers Mountain View, smart vending Mountain View California, grab and go cooler Mountain View, cashless vending Mountain View',
  openGraph: {
    title: 'Haha Smart Coolers in Mountain View, California',
    description: 'Revolutionary grab & go vending technology for Mountain View businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mountain-view-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mountain-view-california',
  },
};

export default function MountainViewCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
