import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rancho Palos Verdes, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rancho Palos Verdes, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rancho Palos Verdes businesses.',
  keywords: 'haha coolers Rancho Palos Verdes, smart vending Rancho Palos Verdes California, grab and go cooler Rancho Palos Verdes, cashless vending Rancho Palos Verdes',
  openGraph: {
    title: 'Haha Smart Coolers in Rancho Palos Verdes, California',
    description: 'Revolutionary grab & go vending technology for Rancho Palos Verdes businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rancho-palos-verdes-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rancho-palos-verdes-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function RanchoPalosVerdesCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
