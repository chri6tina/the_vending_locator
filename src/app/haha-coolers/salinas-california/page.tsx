import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Salinas, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Salinas, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Salinas businesses.',
  keywords: 'haha coolers Salinas, smart vending Salinas California, grab and go cooler Salinas, cashless vending Salinas',
  openGraph: {
    title: 'Haha Smart Coolers in Salinas, California',
    description: 'Revolutionary grab & go vending technology for Salinas businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/salinas-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/salinas-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SalinasCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
