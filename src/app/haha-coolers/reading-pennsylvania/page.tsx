import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Reading, Pennsylvania | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Reading, Pennsylvania. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Reading businesses.',
  keywords: 'haha coolers Reading, smart vending Reading Pennsylvania, grab and go cooler Reading, cashless vending Reading',
  openGraph: {
    title: 'Haha Smart Coolers in Reading, Pennsylvania',
    description: 'Revolutionary grab & go vending technology for Reading businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/reading-pennsylvania',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/reading-pennsylvania',
  },
};

export default function ReadingPennsylvaniaCoolerPageMetadata() {
  return <PageClient />;
}
