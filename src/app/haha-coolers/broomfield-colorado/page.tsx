import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Broomfield, Colorado | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Broomfield, Colorado. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Broomfield businesses.',
  keywords: 'haha coolers Broomfield, smart vending Broomfield Colorado, grab and go cooler Broomfield, cashless vending Broomfield',
  openGraph: {
    title: 'Haha Smart Coolers in Broomfield, Colorado',
    description: 'Revolutionary grab & go vending technology for Broomfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/broomfield-colorado',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/broomfield-colorado',
  },
};

export default function BroomfieldColoradoCoolerPageMetadata() {
  return <PageClient />;
}
