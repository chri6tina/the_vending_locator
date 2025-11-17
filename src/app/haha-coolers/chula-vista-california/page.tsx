import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Chula Vista, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Chula Vista, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Chula Vista businesses.',
  keywords: 'haha coolers Chula Vista, smart vending Chula Vista California, grab and go cooler Chula Vista, cashless vending Chula Vista',
  openGraph: {
    title: 'Haha Smart Coolers in Chula Vista, California',
    description: 'Revolutionary grab & go vending technology for Chula Vista businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/chula-vista-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/chula-vista-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function ChulaVistaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
