import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Diego, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Diego, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Diego businesses.',
  keywords: 'haha coolers San Diego, smart vending San Diego California, grab and go cooler San Diego, cashless vending San Diego',
  openGraph: {
    title: 'Haha Smart Coolers in San Diego, California',
    description: 'Revolutionary grab & go vending technology for San Diego businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-diego-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-diego-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanDiegoCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
