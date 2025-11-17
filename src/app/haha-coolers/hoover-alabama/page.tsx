import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hoover, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hoover, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hoover businesses.',
  keywords: 'haha coolers Hoover, smart vending Hoover Alabama, grab and go cooler Hoover, cashless vending Hoover',
  openGraph: {
    title: 'Haha Smart Coolers in Hoover, Alabama',
    description: 'Revolutionary grab & go vending technology for Hoover businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hoover-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hoover-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HooverAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
