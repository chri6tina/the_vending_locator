import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Oak Lawn, Illinois | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Oak Lawn, Illinois. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Oak Lawn businesses.',
  keywords: 'haha coolers Oak Lawn, smart vending Oak Lawn Illinois, grab and go cooler Oak Lawn, cashless vending Oak Lawn',
  openGraph: {
    title: 'Haha Smart Coolers in Oak Lawn, Illinois',
    description: 'Revolutionary grab & go vending technology for Oak Lawn businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/oak-lawn-illinois',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/oak-lawn-illinois',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function OakLawnIllinoisCoolerPageMetadata() {
  return <PageClient />;
}
