import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in South Pasadena, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in South Pasadena, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for South Pasadena businesses.',
  keywords: 'haha coolers South Pasadena, smart vending South Pasadena California, grab and go cooler South Pasadena, cashless vending South Pasadena',
  openGraph: {
    title: 'Haha Smart Coolers in South Pasadena, California',
    description: 'Revolutionary grab & go vending technology for South Pasadena businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/south-pasadena-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/south-pasadena-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function SouthPasadenaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
