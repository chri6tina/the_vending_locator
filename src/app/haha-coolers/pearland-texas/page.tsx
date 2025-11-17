import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Pearland, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Pearland, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Pearland businesses.',
  keywords: 'haha coolers Pearland, smart vending Pearland Texas, grab and go cooler Pearland, cashless vending Pearland',
  openGraph: {
    title: 'Haha Smart Coolers in Pearland, Texas',
    description: 'Revolutionary grab & go vending technology for Pearland businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/pearland-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/pearland-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PearlandTexasCoolerPageMetadata() {
  return <PageClient />;
}
