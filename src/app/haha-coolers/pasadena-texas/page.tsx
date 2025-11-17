import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pasadena, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pasadena, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pasadena businesses.',
  keywords: 'haha coolers Pasadena, smart vending Pasadena Texas, grab and go cooler Pasadena, cashless vending Pasadena',
  openGraph: {
    title: 'Haha Smart Coolers in Pasadena, Texas',
    description: 'Revolutionary grab & go vending technology for Pasadena businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pasadena-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pasadena-texas',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function PasadenaTexasCoolerPageMetadata() {
  return <PageClient />;
}
