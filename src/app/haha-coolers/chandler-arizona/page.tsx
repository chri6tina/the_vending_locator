import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chandler, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chandler, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chandler businesses.',
  keywords: 'haha coolers Chandler, smart vending Chandler Arizona, grab and go cooler Chandler, cashless vending Chandler',
  openGraph: {
    title: 'Haha Smart Coolers in Chandler, Arizona',
    description: 'Revolutionary grab & go vending technology for Chandler businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chandler-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chandler-arizona',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ChandlerArizonaCoolerPageMetadata() {
  return <PageClient />;
}
