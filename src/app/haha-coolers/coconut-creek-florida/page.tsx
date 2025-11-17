import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Coconut Creek, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Coconut Creek, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Coconut Creek businesses.',
  keywords: 'haha coolers Coconut Creek, smart vending Coconut Creek Florida, grab and go cooler Coconut Creek, cashless vending Coconut Creek',
  openGraph: {
    title: 'Haha Smart Coolers in Coconut Creek, Florida',
    description: 'Revolutionary grab & go vending technology for Coconut Creek businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/coconut-creek-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/coconut-creek-florida',
  },
};

export default function CoconutCreekFloridaCoolerPageMetadata() {
  return <PageClient />;
}
