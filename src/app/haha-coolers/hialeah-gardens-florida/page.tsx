import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Hialeah Gardens, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Hialeah Gardens, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Hialeah Gardens businesses.',
  keywords: 'haha coolers Hialeah Gardens, smart vending Hialeah Gardens Florida, grab and go cooler Hialeah Gardens, cashless vending Hialeah Gardens',
  openGraph: {
    title: 'Haha Smart Coolers in Hialeah Gardens, Florida',
    description: 'Revolutionary grab & go vending technology for Hialeah Gardens businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/hialeah-gardens-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/hialeah-gardens-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function HialeahGardensFloridaCoolerPageMetadata() {
  return <PageClient />;
}
