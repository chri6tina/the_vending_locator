import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Edgewater, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Edgewater, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Edgewater businesses.',
  keywords: 'haha coolers Edgewater, smart vending Edgewater Florida, grab and go cooler Edgewater, cashless vending Edgewater',
  openGraph: {
    title: 'Haha Smart Coolers in Edgewater, Florida',
    description: 'Revolutionary grab & go vending technology for Edgewater businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/edgewater-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/edgewater-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EdgewaterFloridaCoolerPageMetadata() {
  return <PageClient />;
}
