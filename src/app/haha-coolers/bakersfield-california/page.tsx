import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Bakersfield, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Bakersfield, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Bakersfield businesses.',
  keywords: 'haha coolers Bakersfield, smart vending Bakersfield California, grab and go cooler Bakersfield, cashless vending Bakersfield',
  openGraph: {
    title: 'Haha Smart Coolers in Bakersfield, California',
    description: 'Revolutionary grab & go vending technology for Bakersfield businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/bakersfield-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/bakersfield-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function BakersfieldCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
