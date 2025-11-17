import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rohnert Park, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rohnert Park, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rohnert Park businesses.',
  keywords: 'haha coolers Rohnert Park, smart vending Rohnert Park California, grab and go cooler Rohnert Park, cashless vending Rohnert Park',
  openGraph: {
    title: 'Haha Smart Coolers in Rohnert Park, California',
    description: 'Revolutionary grab & go vending technology for Rohnert Park businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rohnert-park-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rohnert-park-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RohnertParkCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
