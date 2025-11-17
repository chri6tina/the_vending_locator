import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Coast, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Coast, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Coast businesses.',
  keywords: 'haha coolers Palm Coast, smart vending Palm Coast Florida, grab and go cooler Palm Coast, cashless vending Palm Coast',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Coast, Florida',
    description: 'Revolutionary grab & go vending technology for Palm Coast businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-coast-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-coast-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PalmCoastFloridaCoolerPageMetadata() {
  return <PageClient />;
}
