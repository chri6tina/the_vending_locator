import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Manchester, New Hampshire | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Manchester, New Hampshire. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Manchester businesses.',
  keywords: 'haha coolers Manchester, smart vending Manchester New Hampshire, grab and go cooler Manchester, cashless vending Manchester',
  openGraph: {
    title: 'Haha Smart Coolers in Manchester, New Hampshire',
    description: 'Revolutionary grab & go vending technology for Manchester businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/manchester-new-hampshire',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/manchester-new-hampshire',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function ManchesterNewHampshireCoolerPageMetadata() {
  return <PageClient />;
}
