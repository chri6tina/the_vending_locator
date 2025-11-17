import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Glendale, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Glendale, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Glendale businesses.',
  keywords: 'haha coolers Glendale, smart vending Glendale Arizona, grab and go cooler Glendale, cashless vending Glendale',
  openGraph: {
    title: 'Haha Smart Coolers in Glendale, Arizona',
    description: 'Revolutionary grab & go vending technology for Glendale businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/glendale-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/glendale-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GlendaleArizonaCoolerPageMetadata() {
  return <PageClient />;
}
