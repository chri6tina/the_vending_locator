import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Nogales, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Nogales, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Nogales businesses.',
  keywords: 'haha coolers Nogales, smart vending Nogales Arizona, grab and go cooler Nogales, cashless vending Nogales',
  openGraph: {
    title: 'Haha Smart Coolers in Nogales, Arizona',
    description: 'Revolutionary grab & go vending technology for Nogales businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/nogales-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/nogales-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function NogalesArizonaCoolerPageMetadata() {
  return <PageClient />;
}
