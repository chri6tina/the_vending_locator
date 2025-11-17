import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cape Coral, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cape Coral, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cape Coral businesses.',
  keywords: 'haha coolers Cape Coral, smart vending Cape Coral Florida, grab and go cooler Cape Coral, cashless vending Cape Coral',
  openGraph: {
    title: 'Haha Smart Coolers in Cape Coral, Florida',
    description: 'Revolutionary grab & go vending technology for Cape Coral businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cape-coral-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cape-coral-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CapeCoralFloridaCoolerPageMetadata() {
  return <PageClient />;
}
