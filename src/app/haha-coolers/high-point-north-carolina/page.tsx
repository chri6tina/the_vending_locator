import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in High Point, North Carolina | Grab & Go Vending',
  description: 'Discover Haha smart coolers in High Point, North Carolina. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for High Point businesses.',
  keywords: 'haha coolers High Point, smart vending High Point North Carolina, grab and go cooler High Point, cashless vending High Point',
  openGraph: {
    title: 'Haha Smart Coolers in High Point, North Carolina',
    description: 'Revolutionary grab & go vending technology for High Point businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/high-point-north-carolina',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/high-point-north-carolina',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HighPointNorthCarolinaCoolerPageMetadata() {
  return <PageClient />;
}
