import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Barstow, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Barstow, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Barstow businesses.',
  keywords: 'haha coolers Barstow, smart vending Barstow California, grab and go cooler Barstow, cashless vending Barstow',
  openGraph: {
    title: 'Haha Smart Coolers in Barstow, California',
    description: 'Revolutionary grab & go vending technology for Barstow businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/barstow-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/barstow-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BarstowCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
