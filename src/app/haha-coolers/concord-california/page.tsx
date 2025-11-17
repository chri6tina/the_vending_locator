import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Concord, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Concord, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Concord businesses.',
  keywords: 'haha coolers Concord, smart vending Concord California, grab and go cooler Concord, cashless vending Concord',
  openGraph: {
    title: 'Haha Smart Coolers in Concord, California',
    description: 'Revolutionary grab & go vending technology for Concord businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/concord-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/concord-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ConcordCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
