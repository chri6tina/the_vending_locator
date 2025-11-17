import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Madera, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Madera, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Madera businesses.',
  keywords: 'haha coolers Madera, smart vending Madera California, grab and go cooler Madera, cashless vending Madera',
  openGraph: {
    title: 'Haha Smart Coolers in Madera, California',
    description: 'Revolutionary grab & go vending technology for Madera businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/madera-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/madera-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function MaderaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
