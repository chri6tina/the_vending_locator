import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Miami Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Miami Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Miami Beach businesses.',
  keywords: 'haha coolers Miami Beach, smart vending Miami Beach Florida, grab and go cooler Miami Beach, cashless vending Miami Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Miami Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Miami Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/miami-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/miami-beach-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MiamiBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
