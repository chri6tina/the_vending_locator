import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hopkinsville, Kentucky | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hopkinsville, Kentucky. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hopkinsville businesses.',
  keywords: 'haha coolers Hopkinsville, smart vending Hopkinsville Kentucky, grab and go cooler Hopkinsville, cashless vending Hopkinsville',
  openGraph: {
    title: 'Haha Smart Coolers in Hopkinsville, Kentucky',
    description: 'Revolutionary grab & go vending technology for Hopkinsville businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hopkinsville-kentucky',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hopkinsville-kentucky',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HopkinsvilleKentuckyCoolerPageMetadata() {
  return <PageClient />;
}
