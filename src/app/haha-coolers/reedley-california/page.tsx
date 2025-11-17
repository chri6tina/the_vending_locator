import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Reedley, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Reedley, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Reedley businesses.',
  keywords: 'haha coolers Reedley, smart vending Reedley California, grab and go cooler Reedley, cashless vending Reedley',
  openGraph: {
    title: 'Haha Smart Coolers in Reedley, California',
    description: 'Revolutionary grab & go vending technology for Reedley businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/reedley-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/reedley-california',
  },
};

export default function ReedleyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
