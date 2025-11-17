import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Placentia, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Placentia, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Placentia businesses.',
  keywords: 'haha coolers Placentia, smart vending Placentia California, grab and go cooler Placentia, cashless vending Placentia',
  openGraph: {
    title: 'Haha Smart Coolers in Placentia, California',
    description: 'Revolutionary grab & go vending technology for Placentia businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/placentia-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/placentia-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PlacentiaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
