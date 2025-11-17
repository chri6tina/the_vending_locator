import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Arvin, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Arvin, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Arvin businesses.',
  keywords: 'haha coolers Arvin, smart vending Arvin California, grab and go cooler Arvin, cashless vending Arvin',
  openGraph: {
    title: 'Haha Smart Coolers in Arvin, California',
    description: 'Revolutionary grab & go vending technology for Arvin businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/arvin-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/arvin-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ArvinCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
