import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Lemon Grove, California | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Lemon Grove, California. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Lemon Grove businesses.',
  keywords: 'haha coolers Lemon Grove, smart vending Lemon Grove California, grab and go cooler Lemon Grove, cashless vending Lemon Grove',
  openGraph: {
    title: 'Haha Smart Coolers in Lemon Grove, California',
    description: 'Revolutionary grab & go vending technology for Lemon Grove businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/lemon-grove-california',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/lemon-grove-california',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function LemonGroveCaliforniaCoolerPageMetadata() {
  return <PageClient />;
}
