import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Miami Gardens, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Miami Gardens, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Miami Gardens businesses.',
  keywords: 'haha coolers Miami Gardens, smart vending Miami Gardens Florida, grab and go cooler Miami Gardens, cashless vending Miami Gardens',
  openGraph: {
    title: 'Haha Smart Coolers in Miami Gardens, Florida',
    description: 'Revolutionary grab & go vending technology for Miami Gardens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/miami-gardens-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/miami-gardens-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MiamiGardensFloridaCoolerPageMetadata() {
  return <PageClient />;
}
