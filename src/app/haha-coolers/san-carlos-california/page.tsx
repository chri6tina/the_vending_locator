import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in San Carlos, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in San Carlos, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for San Carlos businesses.',
  keywords: 'haha coolers San Carlos, smart vending San Carlos California, grab and go cooler San Carlos, cashless vending San Carlos',
  openGraph: {
    title: 'Haha Smart Coolers in San Carlos, California',
    description: 'Revolutionary grab & go vending technology for San Carlos businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/san-carlos-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/san-carlos-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SanCarlosCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
