import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bridgeport, Connecticut | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bridgeport, Connecticut. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bridgeport businesses.',
  keywords: 'haha coolers Bridgeport, smart vending Bridgeport Connecticut, grab and go cooler Bridgeport, cashless vending Bridgeport',
  openGraph: {
    title: 'Haha Smart Coolers in Bridgeport, Connecticut',
    description: 'Revolutionary grab & go vending technology for Bridgeport businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bridgeport-connecticut',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bridgeport-connecticut',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BridgeportConnecticutCoolerPageMetadata() {
  return <PageClient />;
}
