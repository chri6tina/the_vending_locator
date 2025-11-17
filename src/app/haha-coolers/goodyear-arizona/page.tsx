import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Goodyear, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Goodyear, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Goodyear businesses.',
  keywords: 'haha coolers Goodyear, smart vending Goodyear Arizona, grab and go cooler Goodyear, cashless vending Goodyear',
  openGraph: {
    title: 'Haha Smart Coolers in Goodyear, Arizona',
    description: 'Revolutionary grab & go vending technology for Goodyear businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/goodyear-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/goodyear-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GoodyearArizonaCoolerPageMetadata() {
  return <PageClient />;
}
