import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Minneapolis, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Minneapolis, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Minneapolis businesses.',
  keywords: 'haha coolers Minneapolis, smart vending Minneapolis Minnesota, grab and go cooler Minneapolis, cashless vending Minneapolis',
  openGraph: {
    title: 'Haha Smart Coolers in Minneapolis, Minnesota',
    description: 'Revolutionary grab & go vending technology for Minneapolis businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/minneapolis-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/minneapolis-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MinneapolisMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
