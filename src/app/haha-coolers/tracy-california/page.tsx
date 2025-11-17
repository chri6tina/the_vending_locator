import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Tracy, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Tracy, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Tracy businesses.',
  keywords: 'haha coolers Tracy, smart vending Tracy California, grab and go cooler Tracy, cashless vending Tracy',
  openGraph: {
    title: 'Haha Smart Coolers in Tracy, California',
    description: 'Revolutionary grab & go vending technology for Tracy businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/tracy-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/tracy-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TracyCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
