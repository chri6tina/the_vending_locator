import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Bay, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Bay, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Bay businesses.',
  keywords: 'haha coolers Palm Bay, smart vending Palm Bay Florida, grab and go cooler Palm Bay, cashless vending Palm Bay',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Bay, Florida',
    description: 'Revolutionary grab & go vending technology for Palm Bay businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-bay-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-bay-florida',
  },
};

export default function PalmBayFloridaCoolerPageMetadata() {
  return <PageClient />;
}
