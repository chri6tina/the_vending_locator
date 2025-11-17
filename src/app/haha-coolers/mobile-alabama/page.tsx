import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Mobile, Alabama | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Mobile, Alabama. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Mobile businesses.',
  keywords: 'haha coolers Mobile, smart vending Mobile Alabama, grab and go cooler Mobile, cashless vending Mobile',
  openGraph: {
    title: 'Haha Smart Coolers in Mobile, Alabama',
    description: 'Revolutionary grab & go vending technology for Mobile businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/mobile-alabama',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/mobile-alabama',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function MobileAlabamaCoolerPageMetadata() {
  return <PageClient />;
}
