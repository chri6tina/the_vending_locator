import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Rockville, Maryland | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Rockville, Maryland. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Rockville businesses.',
  keywords: 'haha coolers Rockville, smart vending Rockville Maryland, grab and go cooler Rockville, cashless vending Rockville',
  openGraph: {
    title: 'Haha Smart Coolers in Rockville, Maryland',
    description: 'Revolutionary grab & go vending technology for Rockville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/rockville-maryland',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/rockville-maryland',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function RockvilleMarylandCoolerPageMetadata() {
  return <PageClient />;
}
