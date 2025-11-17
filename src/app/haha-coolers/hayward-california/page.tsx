import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hayward, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hayward, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hayward businesses.',
  keywords: 'haha coolers Hayward, smart vending Hayward California, grab and go cooler Hayward, cashless vending Hayward',
  openGraph: {
    title: 'Haha Smart Coolers in Hayward, California',
    description: 'Revolutionary grab & go vending technology for Hayward businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hayward-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hayward-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function HaywardCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
