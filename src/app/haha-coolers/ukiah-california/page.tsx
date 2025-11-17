import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Ukiah, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Ukiah, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Ukiah businesses.',
  keywords: 'haha coolers Ukiah, smart vending Ukiah California, grab and go cooler Ukiah, cashless vending Ukiah',
  openGraph: {
    title: 'Haha Smart Coolers in Ukiah, California',
    description: 'Revolutionary grab & go vending technology for Ukiah businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/ukiah-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/ukiah-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function UkiahCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
