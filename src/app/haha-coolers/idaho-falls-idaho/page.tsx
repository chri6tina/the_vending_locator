import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Idaho Falls, Idaho | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Idaho Falls, Idaho. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Idaho Falls businesses.',
  keywords: 'haha coolers Idaho Falls, smart vending Idaho Falls Idaho, grab and go cooler Idaho Falls, cashless vending Idaho Falls',
  openGraph: {
    title: 'Haha Smart Coolers in Idaho Falls, Idaho',
    description: 'Revolutionary grab & go vending technology for Idaho Falls businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/idaho-falls-idaho',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/idaho-falls-idaho',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function IdahoFallsIdahoCoolerPageMetadata() {
  return <PageClient />;
}
