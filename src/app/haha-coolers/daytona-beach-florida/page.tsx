import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Daytona Beach, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Daytona Beach, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Daytona Beach businesses.',
  keywords: 'haha coolers Daytona Beach, smart vending Daytona Beach Florida, grab and go cooler Daytona Beach, cashless vending Daytona Beach',
  openGraph: {
    title: 'Haha Smart Coolers in Daytona Beach, Florida',
    description: 'Revolutionary grab & go vending technology for Daytona Beach businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/daytona-beach-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/daytona-beach-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function DaytonaBeachFloridaCoolerPageMetadata() {
  return <PageClient />;
}
