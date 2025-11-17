import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Goleta, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Goleta, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Goleta businesses.',
  keywords: 'haha coolers Goleta, smart vending Goleta California, grab and go cooler Goleta, cashless vending Goleta',
  openGraph: {
    title: 'Haha Smart Coolers in Goleta, California',
    description: 'Revolutionary grab & go vending technology for Goleta businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/goleta-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/goleta-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GoletaCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
