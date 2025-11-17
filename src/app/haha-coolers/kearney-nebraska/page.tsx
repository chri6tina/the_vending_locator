import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kearney, Nebraska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kearney, Nebraska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kearney businesses.',
  keywords: 'haha coolers Kearney, smart vending Kearney Nebraska, grab and go cooler Kearney, cashless vending Kearney',
  openGraph: {
    title: 'Haha Smart Coolers in Kearney, Nebraska',
    description: 'Revolutionary grab & go vending technology for Kearney businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kearney-nebraska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kearney-nebraska',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function KearneyNebraskaCoolerPageMetadata() {
  return <PageClient />;
}
