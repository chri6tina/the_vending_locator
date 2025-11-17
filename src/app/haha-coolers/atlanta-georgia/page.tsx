import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Atlanta, Georgia | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Atlanta, Georgia. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Atlanta businesses.',
  keywords: 'haha coolers Atlanta, smart vending Atlanta Georgia, grab and go cooler Atlanta, cashless vending Atlanta',
  openGraph: {
    title: 'Haha Smart Coolers in Atlanta, Georgia',
    description: 'Revolutionary grab & go vending technology for Atlanta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/atlanta-georgia',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/atlanta-georgia',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function AtlantaGeorgiaCoolerPageMetadata() {
  return <PageClient />;
}
