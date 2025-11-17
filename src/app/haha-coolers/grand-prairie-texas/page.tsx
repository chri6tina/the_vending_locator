import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Grand Prairie, Texas | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Grand Prairie, Texas. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Grand Prairie businesses.',
  keywords: 'haha coolers Grand Prairie, smart vending Grand Prairie Texas, grab and go cooler Grand Prairie, cashless vending Grand Prairie',
  openGraph: {
    title: 'Haha Smart Coolers in Grand Prairie, Texas',
    description: 'Revolutionary grab & go vending technology for Grand Prairie businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/grand-prairie-texas',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/grand-prairie-texas',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function GrandPrairieTexasCoolerPageMetadata() {
  return <PageClient />;
}
