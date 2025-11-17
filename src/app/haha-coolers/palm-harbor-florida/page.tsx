import { Metadata } from 'next';
import PageClient from './pageClient';

export const metadata: Metadata = {
  title: 'Haha Smart Coolers in Palm Harbor, Florida | Grab & Go Vending',
  description: 'Discover Haha smart coolers in Palm Harbor, Florida. Revolutionary grab & go technology with 99% accurate checkout, cashless payments, and remote management. Perfect for Palm Harbor businesses.',
  keywords: 'haha coolers Palm Harbor, smart vending Palm Harbor Florida, grab and go cooler Palm Harbor, cashless vending Palm Harbor',
  openGraph: {
    title: 'Haha Smart Coolers in Palm Harbor, Florida',
    description: 'Revolutionary grab & go vending technology for Palm Harbor businesses',
    url: 'https://www.thevendinglocator.com/haha-coolers/palm-harbor-florida',
    siteName: 'The Vending Locator',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.thevendinglocator.com/haha-coolers/palm-harbor-florida',
  },
};

// Enable ISR - regenerate page every hour
// Generate on-demand to reduce build memory usage
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function PalmHarborFloridaCoolerPageMetadata() {
  return <PageClient />;
}
