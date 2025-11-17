import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in La Puente, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in La Puente, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for La Puente businesses.',
  keywords: 'haha coolers La Puente, smart vending La Puente California, grab and go cooler La Puente, cashless vending La Puente',
  openGraph: {
    title: 'Haha Smart Coolers in La Puente, California',
    description: 'Revolutionary grab & go vending technology for La Puente businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/la-puente-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/la-puente-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function LaPuenteCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
