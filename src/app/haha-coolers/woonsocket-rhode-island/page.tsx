import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Woonsocket, Rhode Island | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Woonsocket, Rhode Island. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Woonsocket businesses.',
  keywords: 'haha coolers Woonsocket, smart vending Woonsocket Rhode Island, grab and go cooler Woonsocket, cashless vending Woonsocket',
  openGraph: {
    title: 'Haha Smart Coolers in Woonsocket, Rhode Island',
    description: 'Revolutionary grab & go vending technology for Woonsocket businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/woonsocket-rhode-island',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/woonsocket-rhode-island',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function WoonsocketRhodeIslandCoolerPageMetadata() {
  return <PageClient />;
}
