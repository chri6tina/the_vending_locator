import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pasadena, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pasadena, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pasadena businesses.',
  keywords: 'haha coolers Pasadena, smart vending Pasadena California, grab and go cooler Pasadena, cashless vending Pasadena',
  openGraph: {
    title: 'Haha Smart Coolers in Pasadena, California',
    description: 'Revolutionary grab & go vending technology for Pasadena businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pasadena-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pasadena-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PasadenaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
