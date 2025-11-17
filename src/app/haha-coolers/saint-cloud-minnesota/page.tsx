import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saint Cloud, Minnesota | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saint Cloud, Minnesota. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saint Cloud businesses.',
  keywords: 'haha coolers Saint Cloud, smart vending Saint Cloud Minnesota, grab and go cooler Saint Cloud, cashless vending Saint Cloud',
  openGraph: {
    title: 'Haha Smart Coolers in Saint Cloud, Minnesota',
    description: 'Revolutionary grab & go vending technology for Saint Cloud businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saint-cloud-minnesota',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saint-cloud-minnesota',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SaintCloudMinnesotaCoolerPageMetadata() {
  return <PageClient />;
}
