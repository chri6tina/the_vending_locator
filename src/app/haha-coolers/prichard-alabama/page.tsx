import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Prichard, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Prichard, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Prichard businesses.',
  keywords: 'haha coolers Prichard, smart vending Prichard Alabama, grab and go cooler Prichard, cashless vending Prichard',
  openGraph: {
    title: 'Haha Smart Coolers in Prichard, Alabama',
    description: 'Revolutionary grab & go vending technology for Prichard businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/prichard-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/prichard-alabama',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PrichardAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
