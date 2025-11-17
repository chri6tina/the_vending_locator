import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rio Vista, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rio Vista, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rio Vista businesses.',
  keywords: 'haha coolers Rio Vista, smart vending Rio Vista California, grab and go cooler Rio Vista, cashless vending Rio Vista',
  openGraph: {
    title: 'Haha Smart Coolers in Rio Vista, California',
    description: 'Revolutionary grab & go vending technology for Rio Vista businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rio-vista-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rio-vista-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RioVistaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
