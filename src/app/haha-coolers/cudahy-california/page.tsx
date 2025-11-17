import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Cudahy, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Cudahy, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Cudahy businesses.',
  keywords: 'haha coolers Cudahy, smart vending Cudahy California, grab and go cooler Cudahy, cashless vending Cudahy',
  openGraph: {
    title: 'Haha Smart Coolers in Cudahy, California',
    description: 'Revolutionary grab & go vending technology for Cudahy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/cudahy-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/cudahy-california',
  },
};

// Enable ISR - regenerate page every hour
export const revalidate = 3600;

export default function CudahyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
