import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palmer, Alaska | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palmer, Alaska. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palmer businesses.',
  keywords: 'haha coolers Palmer, smart vending Palmer Alaska, grab and go cooler Palmer, cashless vending Palmer',
  openGraph: {
    title: 'Haha Smart Coolers in Palmer, Alaska',
    description: 'Revolutionary grab & go vending technology for Palmer businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palmer-alaska',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palmer-alaska',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PalmerAlaskaCoolerPageMetadata() {
  return <PageClient />;
}
