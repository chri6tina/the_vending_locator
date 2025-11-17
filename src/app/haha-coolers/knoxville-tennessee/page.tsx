import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Knoxville, Tennessee | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Knoxville, Tennessee. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Knoxville businesses.',
  keywords: 'haha coolers Knoxville, smart vending Knoxville Tennessee, grab and go cooler Knoxville, cashless vending Knoxville',
  openGraph: {
    title: 'Haha Smart Coolers in Knoxville, Tennessee',
    description: 'Revolutionary grab & go vending technology for Knoxville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/knoxville-tennessee',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/knoxville-tennessee',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function KnoxvilleTennesseeCoolerPageMetadata() {
  return <PageClient />;
}
