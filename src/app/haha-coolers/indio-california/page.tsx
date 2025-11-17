import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Indio, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Indio, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Indio businesses.',
  keywords: 'haha coolers Indio, smart vending Indio California, grab and go cooler Indio, cashless vending Indio',
  openGraph: {
    title: 'Haha Smart Coolers in Indio, California',
    description: 'Revolutionary grab & go vending technology for Indio businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/indio-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/indio-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function IndioCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
