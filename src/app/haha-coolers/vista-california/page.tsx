import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Vista, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Vista, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Vista businesses.',
  keywords: 'haha coolers Vista, smart vending Vista California, grab and go cooler Vista, cashless vending Vista',
  openGraph: {
    title: 'Haha Smart Coolers in Vista, California',
    description: 'Revolutionary grab & go vending technology for Vista businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/vista-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/vista-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VistaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
