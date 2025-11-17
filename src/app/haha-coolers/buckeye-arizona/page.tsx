import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Buckeye, Arizona | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Buckeye, Arizona. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Buckeye businesses.',
  keywords: 'haha coolers Buckeye, smart vending Buckeye Arizona, grab and go cooler Buckeye, cashless vending Buckeye',
  openGraph: {
    title: 'Haha Smart Coolers in Buckeye, Arizona',
    description: 'Revolutionary grab & go vending technology for Buckeye businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/buckeye-arizona',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/buckeye-arizona',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function BuckeyeArizonaCoolerPageMetadata() {
  return <PageClient />;
}
