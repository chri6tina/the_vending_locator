import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palmdale, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palmdale, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palmdale businesses.',
  keywords: 'haha coolers Palmdale, smart vending Palmdale California, grab and go cooler Palmdale, cashless vending Palmdale',
  openGraph: {
    title: 'Haha Smart Coolers in Palmdale, California',
    description: 'Revolutionary grab & go vending technology for Palmdale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palmdale-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palmdale-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PalmdaleCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
