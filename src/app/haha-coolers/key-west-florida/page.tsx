import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Key West, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Key West, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Key West businesses.',
  keywords: 'haha coolers Key West, smart vending Key West Florida, grab and go cooler Key West, cashless vending Key West',
  openGraph: {
    title: 'Haha Smart Coolers in Key West, Florida',
    description: 'Revolutionary grab & go vending technology for Key West businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/key-west-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/key-west-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KeyWestFloridaCoolerPageMetadata() {
  return <PageClient />;
}
