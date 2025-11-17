import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Gilbert, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Gilbert, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Gilbert businesses.',
  keywords: 'haha coolers Gilbert, smart vending Gilbert Arizona, grab and go cooler Gilbert, cashless vending Gilbert',
  openGraph: {
    title: 'Haha Smart Coolers in Gilbert, Arizona',
    description: 'Revolutionary grab & go vending technology for Gilbert businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/gilbert-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/gilbert-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GilbertArizonaCoolerPageMetadata() {
  return <PageClient />;
}
