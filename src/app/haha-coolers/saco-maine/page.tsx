import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Saco, Maine | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Saco, Maine. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Saco businesses.',
  keywords: 'haha coolers Saco, smart vending Saco Maine, grab and go cooler Saco, cashless vending Saco',
  openGraph: {
    title: 'Haha Smart Coolers in Saco, Maine',
    description: 'Revolutionary grab & go vending technology for Saco businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/saco-maine',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/saco-maine',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function SacoMaineCoolerPageMetadata() {
  return <PageClient />;
}
