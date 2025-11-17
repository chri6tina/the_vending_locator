import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Apopka, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Apopka, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Apopka businesses.',
  keywords: 'haha coolers Apopka, smart vending Apopka Florida, grab and go cooler Apopka, cashless vending Apopka',
  openGraph: {
    title: 'Haha Smart Coolers in Apopka, Florida',
    description: 'Revolutionary grab & go vending technology for Apopka businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/apopka-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/apopka-florida',
  },
};

export default function ApopkaFloridaCoolerPageMetadata() {
  return <PageClient />;
}
