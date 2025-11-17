import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Kaneohe, Hawaii | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Kaneohe, Hawaii. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Kaneohe businesses.',
  keywords: 'haha coolers Kaneohe, smart vending Kaneohe Hawaii, grab and go cooler Kaneohe, cashless vending Kaneohe',
  openGraph: {
    title: 'Haha Smart Coolers in Kaneohe, Hawaii',
    description: 'Revolutionary grab & go vending technology for Kaneohe businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/kaneohe-hawaii',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/kaneohe-hawaii',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KaneoheHawaiiCoolerPageMetadata() {
  return <PageClient />;
}
