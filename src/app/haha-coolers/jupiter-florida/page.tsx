import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Jupiter, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Jupiter, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Jupiter businesses.',
  keywords: 'haha coolers Jupiter, smart vending Jupiter Florida, grab and go cooler Jupiter, cashless vending Jupiter',
  openGraph: {
    title: 'Haha Smart Coolers in Jupiter, Florida',
    description: 'Revolutionary grab & go vending technology for Jupiter businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/jupiter-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/jupiter-florida',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function JupiterFloridaCoolerPageMetadata() {
  return <PageClient />;
}
