import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in East Greenwich, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in East Greenwich, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for East Greenwich businesses.',
  keywords: 'haha coolers East Greenwich, smart vending East Greenwich Rhode Island, grab and go cooler East Greenwich, cashless vending East Greenwich',
  openGraph: {
    title: 'Haha Smart Coolers in East Greenwich, Rhode Island',
    description: 'Revolutionary grab & go vending technology for East Greenwich businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/east-greenwich-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/east-greenwich-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function EastGreenwichRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
