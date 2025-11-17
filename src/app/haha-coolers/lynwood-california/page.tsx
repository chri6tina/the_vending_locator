import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lynwood, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lynwood, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lynwood businesses.',
  keywords: 'haha coolers Lynwood, smart vending Lynwood California, grab and go cooler Lynwood, cashless vending Lynwood',
  openGraph: {
    title: 'Haha Smart Coolers in Lynwood, California',
    description: 'Revolutionary grab & go vending technology for Lynwood businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lynwood-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lynwood-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LynwoodCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
