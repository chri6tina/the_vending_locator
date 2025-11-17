import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hemet, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hemet, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hemet businesses.',
  keywords: 'haha coolers Hemet, smart vending Hemet California, grab and go cooler Hemet, cashless vending Hemet',
  openGraph: {
    title: 'Haha Smart Coolers in Hemet, California',
    description: 'Revolutionary grab & go vending technology for Hemet businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hemet-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hemet-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HemetCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
