import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Largo, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Largo, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Largo businesses.',
  keywords: 'haha coolers Largo, smart vending Largo Florida, grab and go cooler Largo, cashless vending Largo',
  openGraph: {
    title: 'Haha Smart Coolers in Largo, Florida',
    description: 'Revolutionary grab & go vending technology for Largo businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/largo-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/largo-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LargoFloridaCoolerPageMetadata() {
  return <PageClient />;
}
